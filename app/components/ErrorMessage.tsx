import { StyleSheet, Text } from "react-native";
import Colors from "../utils/Colors";
interface ErrorMessageProps {
  error: string | undefined;
}
export const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  if (!props.error) return null;
  return <Text style={styles.error}>{props.error}</Text>;
};

const styles = StyleSheet.create({ error: { color: Colors.RED } });
