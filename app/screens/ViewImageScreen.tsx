import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Button,
} from "react-native";

export default function ViewImageScreen() {
  const image = {
    uri: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}></View>
        <View style={styles.icon}></View>
      </View>
      <Image source={image} style={styles.image}></Image>;
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "#f9c4ac",
    // position: "absolute",
    // top: 100,
    // alignSelf: "flex-start",
  },
  iconContainer: {
    flexDirection: "row",
    gap: "65%",
    margin: 5,
  },

  image: { width: "100%", height: "60%" },
});
