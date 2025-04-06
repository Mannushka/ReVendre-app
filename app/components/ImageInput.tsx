import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ImageInputIcon } from "./ImageInputIcon";
import { Screen } from "./Screen";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import Colors from "../utils/Colors";

interface ImageInputProps {
  imageUri: string | null;
  onChangeImage: () => void;
}
export const ImageInput: React.FC<ImageInputProps> = ({
  imageUri,
  onChangeImage,
}) => {
  // const [imageUri, setImageUri] = useState<string | null>(null);

  // const pickImage = async () => {
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: "images",
  //     allowsEditing: true,
  //     aspect: [5, 4],
  //   });
  //   console.log(result);
  //   if (!result.canceled) {
  //     setImageUri(result.assets[0].uri);
  //   }
  // };

  return (
    <Screen>
      <View style={styles.container}>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        <TouchableOpacity onPress={onChangeImage}>
          <ImageInputIcon icon="camera" />
        </TouchableOpacity>
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
