import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
interface ScreenProps {
  children: React.ReactNode;
}

export const Screen: React.FC<ScreenProps> = ({ children }) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});
