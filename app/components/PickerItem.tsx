import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { PickerItemProps } from "../types/PickerItemProps";

export const PickerItem: React.FC<PickerItemProps> = ({
  item,
  onPress,
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
        <MaterialCommunityIcons
          name={item.icon}
          size={35}
          color={Colors.WHITE}
        />
      </View> */}
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
  // iconContainer: {
  //   width: 80,
  //   height: 80,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   margin: 10,
  //   padding: 5,
  //   borderRadius: "50%",
  // },

  text: {
    fontWeight: "600",
    fontFamily: "Gill Sans",
    fontSize: 16,
  },
});
