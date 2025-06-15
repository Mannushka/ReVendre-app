import { View, StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import Colors from "../utils/Colors";
import * as yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { PageTitle } from "../components/PageTitle";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(8).label("Password"),
});
const LoginScreen = () => {
  return (
    <Screen>
      <PageTitle titleString="Welcome back!" />
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
          <SubmitButton
            title="Log in"
            color={Colors.WHITE}
            backgroundColor={Colors.BUTTON_CORAL}
            width="85%"
          />
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
    // marginTop: 10,
  },
});

export default LoginScreen;
