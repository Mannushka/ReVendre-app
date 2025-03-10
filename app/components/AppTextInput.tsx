import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import Colors from "../utils/Colors";
import defaultStyles from "../utils/Styles";

type IconName =
  | "lock"
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
  autoCapitalize?: "none" | "words" | "characters" | "sentences";
  autoCorrect?: boolean;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad"
    | "url";

  textContentType?:
    | "none"
    | "emailAddress"
    | "countryName"
    | "familyName"
    | "givenName"
    | "password"
    | "username";

  onChangeText: (text: string) => void;
}
export const AppTextInput: React.FC<AppTextInputProps> = (props) => {
  return (
    <View style={styles.container}>
      {props.icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          size={16}
          name={props.icon}
        />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholder={props.placeholder && props.placeholder}
        autoCapitalize={props.autoCapitalize && props.autoCapitalize}
        autoCorrect={props.autoCorrect && props.autoCorrect}
        keyboardType={props.keyboardType && props.keyboardType}
        textContentType={props.textContentType && props.textContentType}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
    flexDirection: "row",
    width: "80%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
});
