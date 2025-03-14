import { View, StyleSheet, Text } from "react-native";
import { Screen } from "../components/Screen";
import { SubmitButton } from "../components/SubmitButton";
import Colors from "../utils/Colors";
import { Formik } from "formik";
import * as yup from "yup";
import { AppFormField } from "../components/AppFormField";
import { AppForm } from "../components/AppForm";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});
export const LoginScreen = () => {
  return (
    <Screen>
      {/* <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {() => (
          <View style={styles.container}> */}
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
            keyboardType="default"
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
          <SubmitButton title="Log in" color={Colors.BLACK} />
          {/* </View>
        )}
      </Formik> */}
        </View>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
  },
});
