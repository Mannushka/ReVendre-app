import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface PickerItemProps {
  label: string;
  onPress: () => void;
}

export const PickerItem: React.FC<PickerItemProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
