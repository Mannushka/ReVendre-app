import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../utils/Colors";
import { ProfileScreen } from "../../screens";
import { MessagesScreen } from "../../screens";
import { ProfileRootStackParamList } from "../../types/NavigationTypes";

const ProfileNavigator = () => {
  const RootStack = createStackNavigator<ProfileRootStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.WHITE },
        headerShown: false,
      }}
    >
      <RootStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <RootStack.Screen name="MessagesScreen" component={MessagesScreen} />
    </RootStack.Navigator>
  );
};
export default ProfileNavigator;
