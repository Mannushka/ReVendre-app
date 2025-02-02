import { View, StyleSheet } from "react-native";
import Colors from "../utils/Colors";
interface ScreenProps {
  children: React.ReactNode;
}
export const ListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.GRAY_LIGHT300,
  },
});
