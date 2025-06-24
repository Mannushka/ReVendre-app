import Colors from "../utils/Colors";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Platform } from "react-native";

interface ListingCardProps {
  title: string;
  subTitle: string;
  image: string;
  onPress?: () => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  title,
  subTitle,
  image,
  onPress,
}) => {
  const imageSource = {
    uri: image,
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.textContainer}>
            <View>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
            </View>
            <View>
              <Text style={styles.subTitle} numberOfLines={3}>
                {subTitle}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 280,
    backgroundColor: Colors.WHITE,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    // borderWidth: 0.2,
    // borderColor: Colors.GRAY_LIGHT300,
    ...Platform.select({
      ios: {
        shadowColor: Colors.GRAY_MEDIUM,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  container: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    marginTop: 20,
    marginBottom: 10,
    resizeMode: "cover",
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
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    fontWeight: "500",
    marginHorizontal: 2,
  },

  subTitle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    fontWeight: "500",
    marginHorizontal: 5,
  },
});
