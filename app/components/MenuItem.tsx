import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../utils/Colors";

type IconName =
  | "symbol"
  | "function"
  | "key"
  | "head"
  | "link"
  | "email"
  | "image"
  | "text"
  | "alert"
  | "menu"
  | "radio"
  | "switch"
  | "tab"
  | "timer"
  | "forward"
  | "minus"
  | "plus"
  | "exclamation";
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
