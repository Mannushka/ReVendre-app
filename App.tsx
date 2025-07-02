import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ImageInput } from "./app/components/inputs/ImageInput";
import * as ImagePicker from "expo-image-picker";
import { ImageInputList } from "./app/components/inputs/ImageInputList";
import { FormImagePicker } from "./app/components/forms/FormImagePicker";

//screens
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  ListingDetailsScreen,
  ListingEditScreen,
  ListingsScreen,
  MessagesScreen,
  ViewImageScreen,
  ProfileScreen,
} from "./app/screens";

//navigator
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigator } from "./app/components/navigators/BottomNavigator";
import { AuthNavigator } from "./app/components/navigators/AuthNavigator";
import navigationTheme from "./app/components/navigators/navigationTheme";
//auth
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY } from "@env";

export default function App() {
  // const [imageUri, setImageUri] = useState<string | null>(null);

  // const pickImage = async () => {
  //   console.log("btn pressed");
  //   const result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: "images",
  //     allowsEditing: true,
  //     aspect: [5, 4],
  //   });
  //   console.log(result);
  //   if (!result.canceled) {
  //     setImageUri(result.assets[0].uri);
  //   }
  // };

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer theme={navigationTheme}>
          {/* <BottomNavigator /> */}
          <AuthNavigator />
        </NavigationContainer>
        {/* <WelcomeScreen /> */}
        {/* <ViewImageScreen /> */}
        {/* <ProfileScreen /> */}
        {/* <ListingDetailsScreen /> */}
        {/* <RegisterScreen /> */}
        {/* <LoginScreen /> */}
        {/* <ListingEditScreen /> */}
        {/* <MessagesScreen /> */}
        {/* <ListingsScreen /> */}
        {/* <View style={styles.imageList}> */}
        {/* </View> */}
      </GestureHandlerRootView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  textInput: {
    backgroundColor: "gray",
    width: "100%",
  },
  imageList: {},
});
