import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { SafeAreaView } from "react-native";
import { ButtonComponent } from "../components/ButtonComponent";
import Colors from "../utils/Colors";

export default function WelcomeScreen() {
  const image = {
    uri: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <ImageBackground source={image} style={styles.background} blurRadius={2}>
      <SafeAreaView>
        <Text style={styles.text}>Welcome to ReVendre!</Text>
      </SafeAreaView>
      <View style={styles.container}>
        <ButtonComponent
          title="Log in"
          color={Colors.WHITE}
          backgroundColor={Colors.DARK_GRAY}
          onPress={() => console.log("log in btn clicked")}
        />
        <ButtonComponent
          title="I'm a new user"
          color={Colors.WHITE}
          backgroundColor={Colors.DARK_GRAY}
          onPress={() => console.log("new user btn clicked")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  text: {
    alignSelf: "center",
    marginTop: "10%",
    fontSize: 30,
    fontWeight: 500,
  },
});
