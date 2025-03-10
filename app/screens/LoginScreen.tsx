import { View, StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import { AppTextInput } from "../components/AppTextInput";
import { ButtonComponent } from "../components/ButtonComponent";
import Colors from "../utils/Colors";
import { useState } from "react";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Screen>
      <View style={styles.container}>
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={(text: string) => setEmail(text)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          keyboardType="email-address"
          placeholder="Password"
          textContentType="password"
          onChangeText={(text: string) => setPassword(text)}
        />
        <ButtonComponent
          title="Log in"
          onClick={() => console.log(email, password)}
          color={Colors.BLACK}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
  },
});
