import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ImageInputIcon } from "./ImageInputIcon";
import { Screen } from "./Screen";

interface ImageInputProps {
  imageUri: string | null;
  onChangeImage: () => void;
}
export const ImageInput: React.FC<ImageInputProps> = ({
  imageUri,
  onChangeImage,
}) => {
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
