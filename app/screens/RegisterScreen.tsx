import { View, StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as yup from "yup";
import Colors from "../utils/Colors";
import { PageTitle } from "../components/PageTitle";

const RegisterScreen = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required().min(4).label("Username"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(8).label("Password"),
  });
  return (
    <Screen>
      <PageTitle titleString="Let's create you an account!" />
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <View style={styles.container}>
          <AppFormField
            fieldName="username"
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            keyboardType="default"
            placeholder="Username"
            textContentType="username"
          ></AppFormField>
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
          <SubmitButton
            title="Register"
            color={Colors.WHITE}
            backgroundColor={Colors.BUTTON_CORAL}
            width="85%"
          />
        </View>
      </AppForm>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // marginTop: 100,
  },
});
export default RegisterScreen;
