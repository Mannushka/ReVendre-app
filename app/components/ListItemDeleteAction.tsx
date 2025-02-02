import { StyleSheet, View } from "react-native";
import Colors from "../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
interface ListItemDeleteActionProps {
  onPress?: () => void;
}

export const ListItemDeleteAction: React.FC<ListItemDeleteActionProps> = ({
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={35}
          color={Colors.WHITE}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.RED_DANGER,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});
