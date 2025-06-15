import { FlatList } from "react-native";
import { listings } from "../data/Listings";
import { ListingCard } from "../components/ListingCard";
import { Screen } from "../components/Screen";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import routes from "../components/navigators/routes";

type RootStackParamList = {
  ListingsScreen: undefined;
  ListingDetailsScreen: {
    id: number;
    title: string;
    price: string;
    imageUrl: string;
  };
};

type ListingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  typeof routes.LISTINGS,
  typeof routes.LISTING_DETAILS
>;

const ListingsScreen: React.FC<{
  navigation: ListingsScreenNavigationProp;
}> = ({ navigation }) => {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListingCard
            title={item.title}
            subTitle={item.price}
            image={item.imageUrl}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;
