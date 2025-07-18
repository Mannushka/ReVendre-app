import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../utils/Colors";
import { ProfileScreen, MessagesScreen, WelcomeScreen } from "../../screens";
import { ProfileRootStackParamList } from "../../types/NavigationTypes";
import routes from "./routes";

const ProfileNavigator = () => {
  const RootStack = createStackNavigator<ProfileRootStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.WHITE },
        headerShown: false,
      }}
    >
      <RootStack.Screen name={routes.PROFILE} component={ProfileScreen} />
      <RootStack.Screen name={routes.MESSAGES} component={MessagesScreen} />
      <RootStack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />
    </RootStack.Navigator>
  );
};
export default ProfileNavigator;
