import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { SafeAreaView } from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import Colors from "../utils/Colors";
import { Logo } from "../components/Logo";

export default function WelcomeScreen() {
  // const image = {
  //   uri: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // }; // old image
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
            onPress={() => console.log("log in btn clicked")}
          />
          <ButtonComponent
            title="I'm a new user"
            color={Colors.WHITE}
            backgroundColor={Colors.BUTTON_CORAL}
            buttonWidth={"90%"}
            onPress={() => console.log("new user btn clicked")}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

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
