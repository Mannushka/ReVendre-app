import { View, StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import { AppTextInput } from "../components/AppTextInput";
import { ButtonComponent } from "../components/ButtonComponent";
import Colors from "../utils/Colors";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";

export const LoginScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <Screen>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <View style={styles.container}>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              // onChangeText={(text: string) => setEmail(text)}
              onChangeText={handleChange("email")}
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              keyboardType="email-address"
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange("password")}
            />
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
