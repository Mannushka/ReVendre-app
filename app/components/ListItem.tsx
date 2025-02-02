import { View, StyleSheet, Image, Text } from "react-native";
interface ListItemsProps {
  title: string;
  subTitle: string;
  image: string;
}

export const ListItem: React.FC<ListItemsProps> = ({
  title,
  subTitle,
  image,
}) => {
  const imageSource = { uri: image };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  textContainer: {
    gap: 10,
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
  },
  subTitle: {
    fontSize: 15,
  },
});
