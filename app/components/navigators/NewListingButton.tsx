import { View, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../utils/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface NewListingButtonProps {
  onPress: () => void;
}

const NewListingButton: React.FC<NewListingButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="plus-circle"
            color={Colors.WHITE}
            size={40}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BUTTON_CORAL,
    borderRadius: 40,
    height: 80,
    width: 80,
    alignSelf: "center",
    bottom: 20,
    borderColor: Colors.WHITE,
    borderWidth: 10,
    alignContent: "center",
    justifyContent: "center",
  },
  icon: {
    alignSelf: "center",
  },
});
export default NewListingButton;
