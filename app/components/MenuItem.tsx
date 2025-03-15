import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";
import { IconName } from "../types/IconName";

interface MenuItemProps {
  title: string;
  icon: IconName;
}
export const MenuItem: React.FC<MenuItemProps> = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <MaterialCommunityIcons name={icon} size={35} />
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    width: "100%",
    alignItems: "center",
    gap: 10,
    backgroundColor: Colors.WHITE,
  },
});
