import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface PickerItemProps {
  label: string;
  color: string;
  onPress: () => void;
}

export const PickerItem: React.FC<PickerItemProps> = ({
  label,
  color,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, { backgroundColor: color }]}>
        <MaterialCommunityIcons name="alert" size={16} style={styles.icon} />
        <Text style={styles.text}>{label} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 5,
    borderRadius: "50%",
  },
  icon: {
    // alignSelf: "center",
  },
  text: {
    padding: 5,
    // alignSelf: "center",
  },
});
