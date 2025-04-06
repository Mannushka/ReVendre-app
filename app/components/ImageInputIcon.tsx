import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconName } from "../types/IconName";
import Colors from "../utils/Colors";

interface ImageInputIcon {
  icon: IconName;
}
export const ImageInputIcon: React.FC<ImageInputIcon> = ({ icon }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} size={50} color={Colors.DARK_GRAY} />
    </View>
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
