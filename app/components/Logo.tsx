import { View, StyleSheet, Image } from "react-native";
import Colors from "../utils/Colors";

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/revendre-logo.png")}
        style={styles.image}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: Colors.SHADOW_BLACK,
    shadowOffset: { width: -2, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: "50%",
  },
});
