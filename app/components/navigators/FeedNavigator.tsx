import { createStackNavigator } from "@react-navigation/stack";
import { MessagesScreen } from "../../screens/MessagesScreen";
import Colors from "../../utils/Colors";
import { ProfileScreen } from "../../screens/ProfileScreen";
import MessageScreen from "../../screens/MessageScreen";
type RootStackParamList = {
  Feed: undefined;
  Messages: { messageId: number };
};

export const FeedNavigator = () => {
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.WHITE },
      }}
    >
      <RootStack.Screen name="Feed" component={MessagesScreen} />
      <RootStack.Screen name="Messages" component={MessageScreen} />
    </RootStack.Navigator>
  );
};
