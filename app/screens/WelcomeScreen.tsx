import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import Colors from "../utils/Colors";
import { Logo } from "../components/Logo";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRootStackParamList } from "../types/NavigationTypes";
import { useNavigation } from "@react-navigation/native";

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  AuthRootStackParamList,
  "Welcome"
>;
const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  return (
    <ImageBackground
      source={require("../assets/welcome-screen-bg-img.avif")}
      style={styles.imageBackground}
      blurRadius={2}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <Logo />
          <Text style={styles.text}>Welcome to ReVendre!</Text>
        </View>
        <View style={styles.container}>
          <ButtonComponent
            title="Log in"
            color={Colors.WHITE}
            backgroundColor={Colors.BUTTON_CORAL}
            buttonWidth={"90%"}
            onPress={() => navigation.navigate("Login")}
          />
          <ButtonComponent
            title="I'm a new user"
            color={Colors.WHITE}
            backgroundColor={Colors.BUTTON_CORAL}
            buttonWidth={"90%"}
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    opacity: 0.9,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: 20,
  },
  logo: {
    alignItems: "center",
  },
  text: {
    alignSelf: "center",
    marginVertical: 10,
    fontSize: 30,
    fontWeight: 800,
    color: Colors.BEIGE_LIGHT,
  },
});
export default WelcomeScreen;
