import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Colors from "../../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ListItemsProps {
  title: string;
  subTitle: string;
  image: string;
  showChevrons?: boolean;
  onPress?: () => void;
  renderRightActions?: () => JSX.Element;
}

export const ListItem: React.FC<ListItemsProps> = ({
  title,
  subTitle,
  image,
  showChevrons,
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
            <Text numberOfLines={3} style={styles.subTitle}>
              {subTitle}
            </Text>
          </View>
          <View style={styles.icon}>
            {showChevrons && (
              <MaterialCommunityIcons name="chevron-right" size={25} />
            )}
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
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  textContainer: {
    gap: 10,
    width: "70%",
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
  },
  subTitle: {
    fontSize: 15,
  },
  icon: {
    position: "absolute",
    right: 20,
  },
});
