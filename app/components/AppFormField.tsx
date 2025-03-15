import { AppTextInput } from "./AppTextInput";
import { View, StyleSheet } from "react-native";
import { ErrorMessage } from "./ErrorMessage";
import { useFormikContext, FormikTouched } from "formik";
import { IconName } from "../types/IconName";
import { Keyboard } from "../types/Keyboard";
import { TextContent } from "../types/TextContent";
import { AutoCapitalize } from "../types/AutoCapitalize";

interface AppFormFieldProps {
  fieldName: string;
  icon?: IconName;
  placeholder?: string;
  autoCapitalize?: AutoCapitalize;
  autoCorrect?: boolean;
  keyboardType?: Keyboard;
  textContentType?: TextContent;
}
export const AppFormField: React.FC<AppFormFieldProps> = ({
  fieldName,
  icon,
  placeholder,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  textContentType,
}) => {
  const { setFieldTouched, handleChange, touched, errors } = useFormikContext();
  return (
    <View style={styles.container}>
      <AppTextInput
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        icon={icon}
        keyboardType={keyboardType}
        placeholder={placeholder}
        textContentType={textContentType}
        onBlur={() => {
          setFieldTouched(fieldName),
            console.log(touched[fieldName as keyof FormikTouched<unknown>]);
        }}
        onChangeText={handleChange(fieldName)}
      />
      {touched[fieldName as keyof FormikTouched<unknown>] && (
        <ErrorMessage
          error={errors[fieldName as keyof FormikTouched<unknown>]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
});
