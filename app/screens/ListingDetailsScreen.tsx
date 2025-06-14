import { View, StyleSheet } from "react-native";
import { ListingCard } from "../components/ListingCard";
import { ListItem } from "../components/lists/ListItem";
import { Screen } from "../components/Screen";
import { Listing } from "../types/Listing";
import { useRoute, RouteProp } from "@react-navigation/native";
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

type ListingDetailsRouteProp = RouteProp<
  RootStackParamList,
  typeof routes.LISTING_DETAILS
>;

export const ListingDetailsScreen = () => {
  const route = useRoute<ListingDetailsRouteProp>();
  const { id, title, price, imageUrl } = route.params;
  return (
    <Screen>
      <View style={styles.container}>
        <ListingCard title={title} subTitle={price} image={imageUrl} />
        {/* <ListItem
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Luis"
          subTitle="Hello world"
        /> */}
      </View>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "flex-start",
    // alignItems: "center",
  },
});
