import Colors from "../utils/Colors";

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
        <View>
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
    backgroundColor: Colors.WHITE,
    justifyContent: "flex-start",
    alignItems: "center",
    // marginTop: 50,
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
    width: "85%",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  title: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "500",
  },

  subTitle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "300",
  },
});
