import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/Colors";

export default function ViewImageScreen() {
  const image = {
    uri: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="close" size={24} color="white" />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={25}
            color="white"
          />
        </View>
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
    backgroundColor: Colors.BLACK,
  },
  icon: {
    width: 50,
    height: 50,
    position: "relative",
    left: 10,
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    paddingHorizontal: 20,
  },

  image: { width: "100%", height: "60%" },
});
