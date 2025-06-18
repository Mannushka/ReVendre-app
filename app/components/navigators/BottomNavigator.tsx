import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListingEditScreen } from "../../screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconName } from "../../types/IconName";
import Colors from "../../utils/Colors";
import { FeedNavigator } from "./FeedNavigator";
import ProfileNavigator from "./ProfileNavigator";
import NewListingButton from "./NewListingButton";
import { Button } from "react-native";

export const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ color, size }) => {
        //   size = 25;
        //   let iconName: IconName;
        //   if (route.name === "Feed") {
        //     iconName = "note-multiple";
        //   } if (route.name === "My profile") {
        //     iconName = "account";
        //   } else if (route.name !== "New listing") {
        //     iconName = "plus-circle";
        //     size = 30;
        //   } else {
        //     iconName = "help-circle";
        //   }

        //   return (
        //     <MaterialCommunityIcons name={iconName} size={size} color={color} />
        //   );
        // },
        tabBarActiveTintColor: Colors.BUTTON_CORAL,
        tabBarInactiveTintColor: Colors.GRAY_MEDIUM,
      })}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="note-multiple"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="New listing"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("New listing")}
            />
          ),
        })}
      />
      <Tab.Screen
        name="My profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
