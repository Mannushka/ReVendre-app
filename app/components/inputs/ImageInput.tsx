import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { ImageInputIcon } from "./ImageInputIcon";
import { Screen } from "../Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";

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
        <TouchableOpacity onPress={onChangeImage}>
          <MaterialCommunityIcons
            name="camera"
            size={50}
            color={Colors.DARK_GRAY}
          />
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: Colors.GRAY_LIGHT300,
    borderRadius: "10%",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
  },
});
