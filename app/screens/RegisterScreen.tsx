import { View, StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import * as yup from "yup";
import Colors from "../utils/Colors";
import { PageTitle } from "../components/PageTitle";
import { useSignUp } from "@clerk/clerk-expo";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "../types/NavigationTypes";
import { useNavigation } from "@react-navigation/native";
import { FormikValues } from "formik";
import useLoadingState from "../hooks/useLoadingState";
import ActivityIndicator from "../components/ActivityIndicator";

import axios from "axios";
import { BACKEND_URL } from "../components/constants";
import { useAuth, useClerk } from "@clerk/clerk-expo";

type RegisterScreenNavigationProp = NativeStackNavigationProp<
  AuthRootStackParamList,
  "Main"
>;

const RegisterScreen = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required().min(4).label("Username"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(8).label("Password"),
  });
  const { loading, performActionWithLoading } = useLoadingState();
  const { isLoaded, signUp, setActive } = useSignUp();
  const { signOut } = useClerk();

  const navigation = useNavigation<RegisterScreenNavigationProp>();
  console.log("loading is", loading);

  const { getToken } = useAuth();
  const dummyToken = "123";

  const addNewUserToDB = async (username: string, emailAddress: string) => {
    // const token = await getToken();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/users`,
        {
          userName: username,
          email: emailAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${dummyToken}`,
          },
        }
      );
      console.log("data: ", response.data);
      console.log("Added user to DB");
    } catch (error) {
      console.log("error: ", error);
      throw error;
    }
  };

  const handleSignUp = async (
    username: string,
    emailAddress: string,
    password: string
  ) => {
    if (!isLoaded) return;

    performActionWithLoading(async () => {
      let isSignUpSuccessfull = false;
      //register user with clerk
      try {
        await signUp.create({
          username,
          emailAddress,
          password,
        });

        if (signUp.status === "complete") {
          console.log("User registered with Clerk:", signUp);

          //add user to db
          try {
            await addNewUserToDB(username, emailAddress);
            isSignUpSuccessfull = true;
            await setActive({ session: signUp.createdSessionId });
          } catch (dbError) {
            // rollback Clerk user if DB fails
            try {
              const realToken = await getToken();
              const response = await axios.delete(
                `${BACKEND_URL}/users/rollback-user/${signUp.createdUserId}`,
                {
                  headers: {
                    Authorization: `Bearer ${realToken}`,
                  },
                }
              );

              console.log("Rollback response: ", response.data);
            } catch (error) {
              console.log("Rollback error: ", error);
            }
            console.error("DB insert failed:", dbError); // log real error
            throw dbError; // rethrow original error
          }
          //navigate to main screen if both  signup and db insert successful
          if (isSignUpSuccessfull)
            navigation.reset({ index: 0, routes: [{ name: "Main" as never }] });
        }
      } catch (err: any) {
        console.log("SignUp error:", err);
        if (err.errors) {
          console.log("Clerk errors:", err.errors);
        }
      }
    });
  };

  return (
    <Screen>
      <PageTitle titleString="Let's create you an account!" />
      <AppForm
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values: FormikValues) => {
          const { username, email, password } = values;
          handleSignUp(username, email, password);
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
      {loading && <ActivityIndicator isVisible={true} />}
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
