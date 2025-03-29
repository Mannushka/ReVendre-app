import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../utils/Colors";
import { Category } from "../types/Category";
import { PickerItemProps } from "../types/PickerItemProps";

// interface CategoryPickerItemProps {
//   item: Category;
//   onPress: () => void;
// }
export const CategoryPickerItem: React.FC<PickerItemProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <MaterialCommunityIcons
          name={item.icon}
          size={60}
          color={Colors.WHITE}
        />
      </View>
      <Text style={styles.text}>{item.label} </Text>
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
    flex: 1,
    fontSize: 18,
    color: Colors.BLACK,
    textAlign: "center",
  },
});
