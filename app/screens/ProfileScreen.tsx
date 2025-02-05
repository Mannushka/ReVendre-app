import { ListItem } from "../components/ListItem";
import { MenuItem } from "../components/MenuItem";
import { Screen } from "../components/Screen";
import Colors from "../utils/Colors";
import { View, StyleSheet, FlatList } from "react-native";
type IconName =
  | "symbol"
  | "function"
  | "key"
  | "head"
  | "link"
  | "email"
  | "image"
  | "text"
  | "alert"
  | "menu"
  | "radio"
  | "switch"
  | "tab"
  | "timer"
  | "forward"
  | "minus"
  | "plus"
  | "exclamation";
type menuItem = {
  // id: number;
  icon: IconName;
  title: string;
};
export const ProfileScreen = () => {
  const menuItems: menuItem[] = [
    { icon: "format-list-bulleted", title: "My listings" },
    { icon: "email", title: "My emails" },
  ];

  // const renderItem = (item) => {
  //   return <MenuItem title={item.title} icon={item.icon} />;
  // };
  return (
    <Screen>
      <View style={styles.listItem}>
        <ListItem
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Luis"
          subTitle="luis@gmail.com"
        />
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <MenuItem title={item.title} icon={item.icon} />
            </View>
          )}
        />
      </View>
      <View>
        <MenuItem title="Log out" icon="logout" />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginVertical: 40,
  },
  item: {
    margin: 5,
  },
  listItem: {
    backgroundColor: Colors.WHITE,
    height: 100,
    marginTop: 30,
  },
});
