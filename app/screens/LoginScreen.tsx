import { View, StyleSheet, Text } from "react-native";
import { Screen } from "../components/Screen";
import { AppTextInput } from "../components/AppTextInput";
import { ButtonComponent } from "../components/ButtonComponent";
import Colors from "../utils/Colors";
import { Formik } from "formik";
import * as yup from "yup";
import { ErrorMessage } from "../components/ErrorMessage";

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(8).label("Password"),
});
export const LoginScreen = () => {
  return (
    <Screen>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <View style={styles.container}>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyboardType="email-address"
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            <ErrorMessage error={errors.password} />
            <ButtonComponent
              title="Log in"
              onClick={handleSubmit}
              color={Colors.BLACK}
            />
          </View>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
  },
});
