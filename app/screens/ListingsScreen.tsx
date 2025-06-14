import { FlatList } from "react-native";
import { listings } from "../data/Listings";
import { ListingCard } from "../components/ListingCard";
import { Screen } from "../components/Screen";

const ListingsScreen = () => {
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
            onPress={() => console.log(item.title)}
          />
        )}
      />
    </Screen>
  );
};

export default ListingsScreen;
