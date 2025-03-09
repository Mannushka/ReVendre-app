import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TextInput } from "react-native";
import Colors from "../utils/Colors";
import defaultStyles from "../utils/Styles";
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
  placeholder?: string;
}
export const AppTextInput: React.FC<AppTextInputProps> = (props) => {
  return (
    <View style={styles.container}>
      {props.icon && <MaterialCommunityIcons size={16} name={props.icon} />}
      <TextInput
        style={defaultStyles.text}
        placeholder={props.placeholder && props.placeholder}
      />
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
    alignItems: "center",
  },
});
