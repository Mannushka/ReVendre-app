import { createStackNavigator } from "@react-navigation/stack";
import { AuthRootStackParamList } from "../../types/NavigationTypes";
import { WelcomeScreen, LoginScreen, RegisterScreen } from "../../screens";
import { MainNavigator } from "./MainNavigator";

export const AuthNavigator = () => {
  const RootStack = createStackNavigator<AuthRootStackParamList>();
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Welcome" component={WelcomeScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen name="Main" component={MainNavigator} />
    </RootStack.Navigator>
  );
};
