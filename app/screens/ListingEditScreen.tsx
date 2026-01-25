import { Screen } from "../components/Screen";
import {
  AppForm,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import { AppFormPicker as Picker } from "../components/forms/AppFormPicker";
import { View, StyleSheet } from "react-native";
import * as yup from "yup";
import Colors from "../utils/Colors";
import { Category } from "../types/Category";
import { CategoryPickerItem } from "../components/CategoryPickerItem";
import { FormImagePicker } from "../components/forms/FormImagePicker";
import { useLocation } from "../hooks/useLocation";
import { ListingFormValues } from "../types/Listing";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../lib/api";
import { useAuth } from "@clerk/clerk-expo";
import { supabase } from "../../lib/supabase";

const ListingEditScreen = () => {
  const location = useLocation();
  const [categories, setCategories] = useState<Category[]>([]);
  const [uploading, setUploading] = useState(false);
  const [imagesUploaded, setImagesUploaded] = useState<string[]>([]);
  const initialValues = {
    title: "",
    price: 0,
    category: {} as Category,
    description: "",
    images: [],
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required().min(1).label("Title"),
    price: yup.number().required().min(1).max(10000).label("Price"),
    category: yup.object().required().nullable().label("Category"),
    description: yup.string().label("Description"),
    images: yup.array().min(1, "Please add at least one image"),
  });

  const { getToken } = useAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/categories`);
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.log("Error fetching categories: ", error);
        return [];
      }
    };
    fetchCategories();
    // console.log("categories fetched: ", categories);
  }, []);

  const uploadImagesToSupabase = async (images: string[]) => {
    const testImageUris = [
      "https://i5.walmartimages.com/seo/Nike-Air-Max-270-Mens-Casual-Shoes-Black-Anthracite-White-ah8050-002_1966979c-b224-4ea7-8025-df596194568d.8587ee80fb71955ce05135c5f6bbaca1.jpeg",
      "https://i.ebayimg.com/images/g/F~AAAOSwtBdj7SZ3/s-l400.jpg",
    ];

    //upload images to supabase storage and return array of their URLs
    const tasks = images.map(async (imageUri) => {
      try {
        // Build unique filename/path
        const raw = imageUri.split("/").pop() || `image-${Date.now()}`;
        const clean = raw.split("?")[0];
        const ext = clean.includes(".")
          ? clean.split(".").pop()!.toLowerCase()
          : "jpg";
        const unique = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        const path = `listings//images/${unique}.${ext}`;

        // Read bytes
        const res = await fetch(imageUri);
        // const blob = await resp.blob();
        // if (!blob.size) throw new Error("Fetched blob is empty"); //blob didn't work
        const bytes = await res.arrayBuffer();
        if (!bytes.byteLength) throw new Error("empty bytes");

        const mime = ext === "png" ? "image/png" : "image/jpeg";
        // console.log("bytes", bytes, "mime:", mime);

        // Upload
        const { data, error } = await supabase.storage
          .from("listing-images")
          .upload(path, bytes, {
            contentType: mime,
            cacheControl: "31536000",
            upsert: false,
          });

        if (error) throw error;

        // Public URL (if bucket is public)
        const { data: pub } = supabase.storage
          .from("listing-images")
          .getPublicUrl(data.path);
        return { ok: true as const, path: data.path, url: pub.publicUrl };
      } catch (err) {
        console.log("Upload failed for", imageUri, err);
        return { ok: false as const, error: err };
      }
    });

    const results = await Promise.all(tasks);

    const success = results.filter((r) => r.ok) as Array<{
      ok: true;
      path: string;
      url: string;
    }>;

    setImagesUploaded(success.map((s) => s.url));

    const failed = results.filter((r) => !r.ok);
    console.log("Images uploaded: ", success);
    console.log("Images failed: ", failed);

    return { success, failed };

    // for (const imageUri of images) {
    //   try {
    //     const response = await fetch(imageUri);
    //     const blob = await response.blob();
    //     const fileName = imageUri.split("/").pop() || `image_${Date.now()}`;
    //     const { data, error } = await supabase.storage
    //       .from("listing-images")
    //       .upload(fileName, blob);
    //     if (error) {
    //       console.log("Error uploading image: ", error);
    //       continue;
    //     }
    //     const { publicURL, error: urlError } = supabase.storage
    //       .from("listing-images")
    //       .getPublicUrl(data.path);
    //     if (urlError) {
    //       console.log("Error getting public URL: ", urlError);
    //       continue;
    //     }
    //     if (publicURL) {
    //       setImagesUploaded((prev) => [...prev, publicURL]);
    //       console.log("Image uploaded to Supabase: ", publicURL);
    //     }
    //   } catch (error) {
    //     console.log("Error uploading image to Supabase: ", error);
    //   }
    // }
  };

  const postNewListingtoDb = async (values: ListingFormValues) => {
    const token = await getToken();

    if (!token) {
      console.log("No auth token found");
      return;
    }

    // Upload images first
    // Then post listing with image URLs
    if (!!values.images) {
      const { success, failed } = await uploadImagesToSupabase(values.images);
      if (failed.length > 0) {
        console.log("Some images failed to upload, aborting listing post.");
        return;
      }
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/listings`,
        {
          title: values.title,
          price: values.price,
          description: values.description,
          // imageUrls: imagesUploaded,
          categoryId: values.category.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("Listing posted: ", response.data);
    } catch (error) {
      console.log("Error posting listing: ", error.response.data);
    }
  };
  return (
    <Screen>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const payload = { ...values, price: Number(values.price) };
          // console.log("payload:", payload);
          // console.log("price is", typeof payload.price);
          postNewListingtoDb(payload);
        }}
      >
        <View style={styles.container}>
          <FormImagePicker fieldName="images" />
          <FormField fieldName="title" placeholder="Title"></FormField>
          <FormField
            fieldName="price"
            placeholder="Price"
            keyboardType="numeric"
            inputFieldWidth="40%"
          ></FormField>
          <Picker
            pickerWidth="60%"
            items={categories}
            fieldName="category"
            placeholder="Category"
            PickerItemComponent={CategoryPickerItem}
          ></Picker>
          <FormField
            fieldName="description"
            placeholder="Description"
          ></FormField>
          <SubmitButton
            backgroundColor={Colors.BUTTON_CORAL}
            color={Colors.WHITE}
            title="Post"
          />
        </View>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginTop: 30,
  },
});

export default ListingEditScreen;
