import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { ListingCard } from "../components/ListingCard";
import Colors from "../utils/Colors";

export const ListingDetailsScreen = () => {
  const listing = {
    title: "Blue Pillow",
    subTitle: "$20",
    imageUrl:
      "https://images.unsplash.com/photo-1570786240066-c0d753711cfe?q=80&w=1762&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <SafeAreaView style={styles.container}>
      <ListingCard
        title={listing.title}
        subTitle={listing.subTitle}
        image={listing.imageUrl}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.GRAY_LIGHT300,
  },
});
