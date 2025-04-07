import { View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Screen } from "../Screen";
import { ImageInput } from "./ImageInput";

export const ImageInputList = () => {
  const [imageUris, setImageUris] = useState<string[] | []>([]);

  const pickImage = async () => {
    console.log("btn pressed");
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsMultipleSelection: true,
      aspect: [5, 4],
    });
    console.log(result);
    if (!result.canceled) {
      // setImageUri(result.assets[0].uri);
      const selectedImages = result.assets;
      console.log(selectedImages);

      const newImageArray: string[] = [];
      for (let i = 0; i < selectedImages.length; i++) {
        const imageUri = selectedImages[i].uri;
        if (imageUri) newImageArray.push(imageUri);
      }
      setImageUris(newImageArray);
    }
  };

  const images = imageUris.map((imageUri) => (
    <Image source={{ uri: imageUri }} style={styles.image} />
  ));

  return (
    <Screen>
      <View style={styles.container}>
        {!!imageUris && images}
        <ImageInput onChangeImage={pickImage} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    flexWrap: "wrap",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: "10%",
  },
});
