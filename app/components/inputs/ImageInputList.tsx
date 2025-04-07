import { View, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Screen } from "../Screen";
import { ImageInput } from "./ImageInput";

export const ImageInputList = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    console.log("btn pressed");
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [5, 4],
    });
    console.log(result);
    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <Screen>
      <View style={styles.container}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        <ImageInput onChangeImage={pickImage} imageUri={imageUri} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: "10%",
  },
});
