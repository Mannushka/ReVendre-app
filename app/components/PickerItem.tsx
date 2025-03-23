import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconName } from "../types/IconName";
import Colors from "../utils/Colors";

interface PickerItemProps {
  label: string;
  color: string;
  iconName: IconName;
  onPress: () => void;
}

export const PickerItem: React.FC<PickerItemProps> = ({
  label,
  color,
  iconName,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <MaterialCommunityIcons
          name={iconName}
          size={35}
          color={Colors.WHITE}
        />
      </View>
      <Text style={styles.text}>{label} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 100,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 5,
  },
  iconContainer: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 5,
    borderRadius: "50%",
  },

  text: {
    fontWeight: "600",
    fontFamily: "Gill Sans",
    fontSize: 16,
  },
});
