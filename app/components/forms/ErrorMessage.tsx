import { StyleSheet, Text } from "react-native";
import Colors from "../../utils/Colors";
interface ErrorMessageProps {
  error: string | undefined;
}
export const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  if (!error) return null;
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({ error: { color: Colors.RED } });
