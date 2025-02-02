import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import Colors from "../utils/Colors";
interface ListItemsProps {
  title: string;
  subTitle: string;
  image: string;
  onPress?: () => void;
}

export const ListItem: React.FC<ListItemsProps> = ({
  title,
  subTitle,
  image,
  onPress,
}) => {
  const imageSource = { uri: image };
  return (
    <TouchableHighlight underlayColor={Colors.GRAY_LIGHT300} onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={imageSource} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  textContainer: {
    gap: 10,
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
  },
  subTitle: {
    fontSize: 15,
  },
});
