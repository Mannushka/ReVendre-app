import { View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Screen } from "../Screen";
import { ImageInput } from "./ImageInput";
import { ImageItem } from "../ImageItem";
import { template } from "@babel/core";
export const ImageInputList = () => {
  const [imageUris, setImageUris] = useState<string[] | []>([]);

  const pickImage = async (): Promise<void> => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsMultipleSelection: true,
      aspect: [5, 4],
    });
    console.log(result);
    if (!result.canceled) {
      // setImageUri(result.assets[0].uri);
      const selectedImages = result.assets;

      const newImageArray: string[] = [];
      for (let i = 0; i < selectedImages.length; i++) {
        const imageUri = selectedImages[i].uri;
        if (imageUri) newImageArray.push(imageUri);
      }
      setImageUris(newImageArray);
      console.log("image removed");
    }
  };

  const removeImage = (imageUri: string): void => {
    const newImageUris = imageUris.filter((image) => image !== imageUri);
    setImageUris(newImageUris);
  };

  // const images = imageUris.map((imageUri) => (
  //   <Image source={{ uri: imageUri }} style={styles.image} />
  // ));
  const images = imageUris.map((imageUri) => (
    <View style={styles.gridItem}>
      <ImageItem
        imageUri={imageUri}
        width={100}
        height={100}
        borderRadius="10%"
        onRemoveImage={removeImage}
      />
    </View>
  ));

  return (
    <Screen>
      <View style={styles.container}>
        {!!imageUris && images}
        <View style={styles.gridItem}>
          <ImageInput onChangeImage={pickImage} />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 20,
    flexWrap: "wrap",
    // justifyContent: "space-between",
  },
  gridItem: {
    width: "33.333%",
    marginBottom: 10,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: "10%",
  },
});
