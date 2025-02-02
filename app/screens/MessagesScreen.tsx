import { FlatList, StyleSheet } from "react-native";
import { ListItem } from "../components/ListItem";
import { Screen } from "../components/Screen";
import { ListItemSeparator } from "../components/ListItemSeparator";
import { ListItemDeleteAction } from "../components/ListItemDeleteAction";
import { useState } from "react";
// interface MessagesScreenProps {
//   title: string;
// }

export const MessagesScreen = () => {
  const initialMessages = [
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
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Title 4",
      description: "Description 4",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Title 5",
      description: "Description 5",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [messages, setMessages] = useState(initialMessages);
  const handleDelete = (message: {
    id: number;
    title: string;
    description: string;
    image: string;
  }): void => {
    setMessages((prevMessages) =>
      prevMessages.filter((m) => m.id !== message.id)
    );
  };

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
            onPress={() => console.log("Message selected", { item })}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});
