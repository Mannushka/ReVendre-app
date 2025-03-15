import Colors from "../utils/Colors";
import { View, StyleSheet, Image, Text } from "react-native";

interface ListingCardProps {
  title: string;
  subTitle: string;
  image: string;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  title,
  subTitle,
  image,
}) => {
  const imageSource = {
    uri: image,
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
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
    marginTop: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY_LIGHT300,
  },
  container: {
    alignItems: "center",
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
