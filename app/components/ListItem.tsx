import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Colors from "../utils/Colors";
interface ListItemsProps {
  title: string;
  subTitle: string;
  image: string;
  onPress?: () => void;
  renderRightActions?: () => JSX.Element;
}

export const ListItem: React.FC<ListItemsProps> = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) => {
  const imageSource = { uri: image };
  return (
    <ReanimatedSwipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={Colors.GRAY_LIGHT300}
        onPress={onPress}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={imageSource} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </ReanimatedSwipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    width: "100%",
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
