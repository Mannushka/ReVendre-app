import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
interface ListingCardProps {
  title: string;
  subTitle: string;
  image: string;
}

export const ListingCard: React.FC<ListingCardProps> = (props) => {
  const imageSource = {
    uri: props.image,
  };
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 300,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 80,
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
    marginBottom: 10,
    objectFit: "cover",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between", // doesn't work
    gap: 150,
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
  },
  titleContainer: {}, //need to either fill out or delete
  subTitle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "300",
  },
  subTitleContainer: {
    flex: 0.2,
    alignItems: "flex-end",
    justifyContent: "center",
  }, // doesn't work
});
