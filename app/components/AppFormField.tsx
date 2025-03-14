import { AppTextInput } from "./AppTextInput";
import { View, StyleSheet } from "react-native";
import { ErrorMessage } from "./ErrorMessage";
import { useFormikContext, FormikTouched } from "formik";
type IconName = "lock" | "email" | "image" | "text";
type Keyboard =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "url";

type TextContent =
  | "none"
  | "emailAddress"
  | "countryName"
  | "familyName"
  | "givenName"
  | "password"
  | "username";

type AutoCapitalize = "none" | "words" | "characters" | "sentences";

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
