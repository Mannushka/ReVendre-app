import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Screen } from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { ErrorMessage } from "../components/forms";
import * as yup from "yup";
import Colors from "../utils/Colors";
import { PageTitle } from "../components/PageTitle";
import { useSignUp, useAuth } from "@clerk/clerk-expo";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "../types/NavigationTypes";
import { useNavigation } from "@react-navigation/native";
import { FormikValues } from "formik";
import useLoadingState from "../hooks/useLoadingState";
import ActivityIndicator from "../components/ActivityIndicator";

import axios from "axios";
import { BACKEND_URL } from "../components/constants";

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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigation = useNavigation<RegisterScreenNavigationProp>();
  console.log("loading is", loading);

  const { getToken, signOut } = useAuth();

  const addNewUserToDB = async (
    username: string,
    emailAddress: string,
    token: string | null
  ) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/users`,
        {
          userName: username,
          email: emailAddress,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
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

  const rollBackClerkUser = async (userId: string, token: string) => {
    try {
      const response = await axios.delete(
        `${BACKEND_URL}/users/rollback-user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Rollback response: ", response.data);
    } catch (error) {
      console.log("Rollback error: ", error);
    }
  };

  const handleSignUp = async (
    username: string,
    emailAddress: string,
    password: string
  ) => {
    if (!isLoaded) return;

    performActionWithLoading(async () => {
      //register user with clerk
      try {
        await signUp.create({
          username,
          emailAddress,
          password,
        });

        if (signUp.status === "complete") {
          console.log("User registered with Clerk:", signUp);
          await setActive({ session: signUp.createdSessionId });
          const token = await getToken();
          const dummyToken = "dummyToken";
          console.log("token", token);

          //add user to db
          try {
            await addNewUserToDB(username, emailAddress, dummyToken);
          } catch (dbError) {
            // rollback Clerk user if DB fails
            const clerkUserId = signUp.createdUserId;
            if (clerkUserId && token)
              await rollBackClerkUser(clerkUserId, token);

            console.error("DB insert failed:", dbError); // log real error
            setErrorMessage("Registration failed. Please try again.");
            throw dbError; // rethrow original error
          }

          //navigate to main screen if both  signup and db insert successful

          navigation.reset({ index: 0, routes: [{ name: "Main" as never }] });
        }
      } catch (err: any) {
        console.log("SignUp error:", err);

        if (err.errors) {
          console.log("Clerk errors:", err.errors);
          console.log("First error longMessage:", err.errors[0]?.longMessage);
          setErrorMessage(err.errors[0]?.longMessage);
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
          {errorMessage && <ErrorMessage error={errorMessage} />}
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
