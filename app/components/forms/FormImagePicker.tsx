import React from "react";
import { View } from "react-native";
import { ImageInputList } from "../inputs/ImageInputList";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext, FormikTouched } from "formik";
import { ErrorMessage } from "./ErrorMessage";

interface FormImagePickerProps {
  fieldName: string;
}

export const FormImagePicker: React.FC<FormImagePickerProps> = ({
  fieldName,
}) => {
  const { setFieldValue, touched, errors, values } = useFormikContext<any>();

  const imageUris = values[fieldName];

  const addImage = async (): Promise<void> => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        console.log("Camera permission not granted");
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        allowsMultipleSelection: true,
        aspect: [5, 4],
      });

      console.log(result);

      if (!result.canceled) {
        const selectedImages = result.assets;

        const newImageArray: string[] = [];
        for (let i = 0; i < selectedImages.length; i++) {
          const imageUri = selectedImages[i].uri;
          if (imageUri) newImageArray.push(imageUri);
        }
        setFieldValue(fieldName, [...imageUris, ...newImageArray]);

        console.log("image added");
      }
    } catch (error) {
      console.error("Error selecting image: ", error);
    }
  };

  const removeImage = (imageUri: string): void => {
    const newImageUris = imageUris.filter(
      (image: string) => image !== imageUri
    );
    setFieldValue(fieldName, newImageUris);
  };
  return (
    <View>
      <ImageInputList
        imageUris={imageUris}
        addImage={addImage}
        removeImage={removeImage}
      />
      {touched[fieldName] && (
        <ErrorMessage error={errors[fieldName]?.toString()} />
      )}
    </View>
  );
};
