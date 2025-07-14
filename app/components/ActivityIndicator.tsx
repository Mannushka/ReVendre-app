import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

interface ActivityIndicatorProps {
  isVisible: boolean;
}
const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  isVisible = false,
}) => {
  console.log("visible is ", isVisible);
  if (!isVisible) return null;
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
        style={{ width: 250, height: 200 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
export default ActivityIndicator;
