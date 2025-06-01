import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../utils/Colors";

interface ImageInputProps {
  addImage: () => void;
}
export const ImageInput: React.FC<ImageInputProps> = ({ addImage }) => {
  return (
    <TouchableOpacity onPress={addImage}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="camera"
          size={50}
          color={Colors.DARK_GRAY}
        />
      </View>
    </TouchableOpacity>
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
    marginHorizontal: 4,
  },
});
