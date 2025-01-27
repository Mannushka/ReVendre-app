import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen";

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Hello world!!!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  // return <WelcomeScreen />;
  return <ListingDetailsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
