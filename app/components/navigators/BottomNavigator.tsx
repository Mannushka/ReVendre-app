import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MessagesScreen } from "../../screens/MessagesScreen";
import { ProfileScreen } from "../../screens/ProfileScreen";
import { ListingEditScreen } from "../../screens/ListingEditScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconName } from "../../types/IconName";
import Colors from "../../utils/Colors";
import { FeedNavigator } from "./FeedNavigator";
export const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          size = 25;
          let iconName: IconName;
          if (route.name === "Feed") {
            iconName = "note-multiple";
          } else if (route.name === "Account") {
            iconName = "account";
          } else if (route.name === "New listing") {
            iconName = "plus-circle";
          } else {
            iconName = "help-circle";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: Colors.BUTTON_CORAL,
        tabBarInactiveTintColor: Colors.GRAY_MEDIUM,
      })}
    >
      <Tab.Screen name="Feed" component={FeedNavigator} />
      <Tab.Screen name="New listing" component={ListingEditScreen} />
      <Tab.Screen name="Account" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
