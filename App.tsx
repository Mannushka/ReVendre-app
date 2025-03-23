import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import { ListingDetailsScreen } from "./app/screens/ListingDetailsScreen";
import { MessagesScreen } from "./app/screens/MessagesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ProfileScreen } from "./app/screens/ProfileScreen";
import { AppTextInput } from "./app/components/AppTextInput";
import { LoginScreen } from "./app/screens/LoginScreen";
import { RegisterScreen } from "./app/screens/RegisterScreen";
import { AppPicker } from "./app/components/AppPicker";
import { Screen } from "./app/components/Screen";
import { ListingEditScreen } from "./app/screens/ListingEditScreen";
import { useState } from "react";

export default function App() {
  const items = [
    {
      label: "Furniture",
      value: 1,
    },
    {
      label: "Clothing",
      value: 2,
    },
    {
      label: "Electronics",
      value: 3,
    },
  ];
  const [category, setCategory] = useState();
  return (
    <GestureHandlerRootView>
      {/* <ProfileScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <RegisterScreen /> */}
      <ListingEditScreen />
      {/* <MessagesScreen /> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    backgroundColor: "gray",
    width: "100%",
  },
});
