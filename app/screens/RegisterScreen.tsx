import { View, StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as yup from "yup";
import Colors from "../utils/Colors";
import { PageTitle } from "../components/PageTitle";
import { useSignUp } from "@clerk/clerk-expo";

const RegisterScreen = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required().min(4).label("Username"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(8).label("Password"),
  });

  const { isLoaded, signUp, setActive } = useSignUp();

  const handleSignUp = async (
    username: string,
    emailAddress: string,
    password: string
  ) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        username,
        emailAddress,
        password,
      });

      // Immediately set the session as active without verification
      // await setActive(); // Assuming this function sets the session as active

      // // Redirect the user to the desired location
      // router.replace("/");
      console.log("sign up status", signUp.status);

      if (signUp.status === "complete") console.log("User registered");
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <Screen>
      <PageTitle titleString="Let's create you an account!" />
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const { username, email, password } = values;
          console.log(email);
          handleSignUp(username, email, password);
          console.log("hello");
        }}
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
//add email verification
//add log out button
