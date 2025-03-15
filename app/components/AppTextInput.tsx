import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TextInput } from "react-native";
import Colors from "../utils/Colors";
import defaultStyles from "../utils/Styles";
import { IconName } from "../types/IconName";
import { AutoCapitalize } from "../types/AutoCapitalize";
import { Keyboard } from "../types/Keyboard";
import { TextContent } from "../types/TextContent";

interface AppTextInputProps {
  icon?: IconName;
  placeholder?: string;
  autoCapitalize?: AutoCapitalize;
  autoCorrect?: boolean;
  keyboardType?: Keyboard;
  textContentType?: TextContent;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
}

export const AppTextInput: React.FC<AppTextInputProps> = ({
  icon,
  placeholder,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  textContentType,
  onChangeText,
  onBlur,
}) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons style={styles.icon} size={16} name={icon} />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholder={placeholder && placeholder}
        autoCapitalize={autoCapitalize && autoCapitalize}
        autoCorrect={autoCorrect && autoCorrect}
        keyboardType={keyboardType && keyboardType}
        textContentType={textContentType && textContentType}
        onChangeText={onChangeText}
        onBlur={onBlur}
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
