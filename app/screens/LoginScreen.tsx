import { View, StyleSheet, Text } from "react-native";
import { Screen } from "../components/Screen";
import { AppTextInput } from "../components/AppTextInput";
import { ButtonComponent } from "../components/ButtonComponent";
import Colors from "../utils/Colors";
import { Formik } from "formik";
import * as yup from "yup";
import { ErrorMessage } from "../components/ErrorMessage";
import { AppFormField } from "../components/AppFormField";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
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
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <View style={styles.container}>
            <AppFormField
              fieldName="email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
            ></AppFormField>
            <AppFormField
              fieldName="password"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyboardType="email-address"
              placeholder="Password"
              textContentType="password"
            ></AppFormField>
            {/* <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onBlur={() => {
                setFieldTouched("email"), console.log(touched.email);
              }}
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            /> */}
            {/* {touched.email && <ErrorMessage error={errors.email} />} */}
            {/* <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("password")}
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange("password")}
            /> */}
            {/* {touched.password && <ErrorMessage error={errors.password} />} */}
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
