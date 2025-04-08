import {
  View,
  StyleSheet,
  Image,
  DimensionValue,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/Colors";
interface ImageItemProps {
  imageUri: string;
  width: DimensionValue;
  height: DimensionValue;
  borderRadius?: string;
  onRemoveImage: (imageUri: string) => void;
}

export const ImageItem: React.FC<ImageItemProps> = ({
  imageUri,
  width,
  height,
  borderRadius,
  onRemoveImage,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUri }}
        style={[
          { width: width },
          { height: height },
          { borderRadius: borderRadius },
        ]}
      />
      <Pressable onPress={() => onRemoveImage(imageUri)}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="close"
            size={20}
            color={Colors.DARK_GRAY}
          />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  iconContainer: {
    position: "absolute",
    right: 5,
    backgroundColor: Colors.GRAY_LIGHT300,
    marginTop: 5,
    opacity: 0.6,
    borderRadius: "10%",
  },
});
