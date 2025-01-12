import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";
import { SafeAreaView } from "react-native";
export default function WelcomeScreen() {
  const image = {
    uri: "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <ImageBackground source={image} style={styles.background}>
      <SafeAreaView>
        <Text style={styles.text}>Welcome to ReVendre!</Text>
      </SafeAreaView>
      <View style={styles.container}>
        <Button title="Log in" color={"black"} />
        <Button title="I'm a new user" color={"black"} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
  },
  background: {
    flex: 1,
  },
  text: {
    alignSelf: "center",
    marginTop: "10%",
    fontSize: 30,
  },
});
