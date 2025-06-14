import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../../utils/Colors";
import ListingsScreen from "../../screens/ListingsScreen";
import { ListingDetailsScreen } from "../../screens";
import { Listing } from "../../types/Listing";
import routes from "./routes";

type RootStackParamList = {
  ListingsScreen: undefined;
  ListingDetailsScreen: {
    id: number;
    title: string;
    price: string;
    imageUrl: string;
  };
};

export const FeedNavigator = () => {
  const RootStack = createStackNavigator<RootStackParamList>();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.WHITE },
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    >
      <RootStack.Screen name={routes.LISTINGS} component={ListingsScreen} />
      <RootStack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </RootStack.Navigator>
  );
};
