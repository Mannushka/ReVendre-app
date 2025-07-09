import { View, StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import Colors from "../utils/Colors";
import * as yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { PageTitle } from "../components/PageTitle";
import { useSignIn } from "@clerk/clerk-expo";
import { ErrorMessage } from "../components/forms";

const LoginScreen = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(8).label("Password"),
  });

  const { isLoaded, signIn, setActive } = useSignIn();

  const handleSignIn = async (email: string, password: string) => {
    if (!isLoaded) return;
    // if (!email || !password)
    //   return <ErrorMessage error="Please fill out the log in form" />;
    try {
      await signIn.create({
        identifier: email,
        password: password,
      });

      // Immediately set the session as active without verification
      // await setActive(); // Assuming this function sets the session as active

      // // Redirect the user to the desired location
      // router.replace("/");
      console.log("sign in status", signIn.status);

      if (signIn.status === "complete") {
        console.log("User logged in");
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
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
        validationSchema={validationSchema}
        onSubmit={(values) => {
          const { email, password } = values;
          handleSignIn(email, password);
        }}
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
