import { StyleSheet, View, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/Colors";
import { Screen } from "../components/Screen";

const ViewImageScreen = () => {
  const image = {
    uri: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  };

  return (
    <Screen>
      {/* <View style={styles.container}> */}
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <MaterialCommunityIcons name="close" size={24} color={Colors.BLACK} />
        </View>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={25}
            color={Colors.BLACK}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image}></Image>;{/* </View> */}
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
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
    marginTop: 20,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    paddingHorizontal: 15,
    shadowColor: Colors.SHADOW_BLACK,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  image: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
    borderRadius: "2%",
  },
});
export default ViewImageScreen;
