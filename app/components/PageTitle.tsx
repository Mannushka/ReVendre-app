import { View, StyleSheet, Text } from "react-native";

interface PageTitleProps {
  titleString: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ titleString }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{titleString}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 10,
    padding: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
