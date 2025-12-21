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
// import categories from "../data/Categories";
import { CategoryPickerItem } from "../components/CategoryPickerItem";
import { FormImagePicker } from "../components/forms/FormImagePicker";
import { useLocation } from "../hooks/useLocation";
import { ListingFormValues } from "../types/Listing";
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "@env";

const ListingEditScreen = () => {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const initialValues = {
    title: "",
    price: 0,
    categoryId: null,
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
    console.log("categories fetched: ", categories);
  }, []);

  const postNewListingtoDb = async (values: ListingFormValues) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/listings`, {
        title: values.title,
        description: values.description,
        price: values.price,
        category: values.category,
      });
      console.log("Listing posted: ", response.data);
    } catch (error) {
      console.log("Error posting listing: ", error);
    }
  };
  return (
    <Screen>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          postNewListingtoDb(values);
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
