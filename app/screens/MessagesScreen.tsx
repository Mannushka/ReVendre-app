import { FlatList, View, StyleSheet } from "react-native";
import { ListItem } from "../components/ListItem";
import { Screen } from "../components/Screen";
import { ListItemSeparator } from "../components/ListItemSeparator";
// interface MessagesScreenProps {
//   title: string;
// }

export const MessagesScreen = () => {
  const messages = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
      image:
        "https://images.unsplash.com/photo-1738369350430-87d667611998?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});
