import { FlatList } from "react-native";
import { listings } from "../data/Listings";
import { ListingCard } from "../components/ListingCard";
import { Screen } from "../components/Screen";
import { Listing } from "../types/Listing";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
type RootStackParamList = {
  ListingsScreen: undefined;
  ListingDetailsScreen: {
    listing: { id: number; title: string; price: string; imageUrl: string };
  };
};
// Define the navigation prop type specific to this screen
type ListingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ListingsScreen",
  "ListingDetailsScreen"
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
            onPress={() =>
              navigation.navigate("ListingDetailsScreen", {
                listing: {
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  imageUrl: item.imageUrl,
                },
              })
            }
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;
