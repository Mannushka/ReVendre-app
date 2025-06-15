import { FlatList, StyleSheet } from "react-native";
import { Screen } from "../components/Screen";
import { ListItem } from "../components/lists/ListItem";
import { ListItemSeparator } from "../components/lists/ListItemSeparator";
import { ListItemDeleteAction } from "../components/lists/ListItemDeleteAction";
import { useState } from "react";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileRootStackParamList } from "../types/NavigationTypes";
import routes from "../components/navigators/routes";

interface MessagesScreenProps {
  navigation: MessagesScreenNavigationProp;
}

// type RootStackParamList = {
//   MessagesScreen: undefined;
//   Messages: { messageId: number };
// };

type MessagesScreenNavigationProp = NativeStackNavigationProp<
  ProfileRootStackParamList,
  typeof routes.MESSAGES
>;

const MessagesScreen: React.FC<MessagesScreenProps> = ({ navigation }) => {
  const profilePicture =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const initialMessages = [
    {
      id: 1,
      title: "Title 1",
      // description: "Description 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image: profilePicture,
      // "https://images.unsplash.com/photo-1738369350430-87d667611998?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
      image: profilePicture,
      // "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Title 3",
      description: "Description 3",
      image: profilePicture,
      // "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Title 4",
      description: "Description 4",
      image: profilePicture,
      // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Title 5",
      description: "Description 5",
      image: profilePicture,
      // "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
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

  // const renderRightActions = (item: {
  //   id: number;
  //   title: string;
  //   description: string;
  //   image: string;
  // }) => {
  //   return <ListItemDeleteAction onPress={() => handleDelete(item)} />;
  // };

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
            showChevrons={true}
            onPress={
              () => console.log(item.id)
              // navigation.navigate("Messages", {
              //   messageId: item.id,
              // })
            }
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
            // renderRightActions={() => renderRightActions(item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
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
          ]);
        }}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default MessagesScreen;
