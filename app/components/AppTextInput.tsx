import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TextInput } from "react-native";
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
interface AppTextInputProps {
  icon?: IconName;
}
export const AppTextInput: React.FC<AppTextInputProps> = (props) => {
  return (
    <View style={styles.container}>
      {props.icon && <MaterialCommunityIcons name={props.icon} />}
      <TextInput style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.GRAY_LIGHT300,
    borderRadius: 25,
    flexDirection: "row",
    width: "80%",
    padding: 15,
    marginVertical: 10,
    justifyContent: "center",
  },
  textInput: {
    fontSize: 18,
    width: "100%",
  },
});
