import { View, StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import Colors from "../utils/Colors";
import * as yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { PageTitle } from "../components/PageTitle";
import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { FormikValues } from "formik";
import ActivityIndicator from "../components/ActivityIndicator";
import useLoadingState from "../hooks/useLoadingState";
import axios from "axios";
import { BACKEND_URL } from "@env";

const LoginScreen = () => {
  const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(8).label("Password"),
  });

  const { loading, performActionWithLoading } = useLoadingState();
  const { isLoaded, signIn, setActive } = useSignIn();
  const navigation = useNavigation();
  console.log("loading 1 is", loading);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/users`);
      console.log("data: ", response.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const handleSignIn = async (email: string, password: string) => {
    if (!isLoaded) return;
    // if (!email || !password)
    //   return <ErrorMessage error="Please fill out the log in form" />;
    // setLoading(true);
    performActionWithLoading(async () => {
      try {
        await signIn.create({
          identifier: email,
          password: password,
        });

        if (signIn.status === "complete") {
          setActive({ session: signIn.createdSessionId });

          navigation.reset({ index: 0, routes: [{ name: "Main" as never }] });
        }
      } catch (err) {
        console.error(JSON.stringify(err, null, 2));
      }

      await fetchUsers();
    });
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
      {loading && <ActivityIndicator isVisible={true} />}
      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values: FormikValues) => {
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
  },
});

export default LoginScreen;
