import { ListItem } from "../components/lists/ListItem";
import { MenuItem } from "../components/MenuItem";
import { Screen } from "../components/Screen";
import Colors from "../utils/Colors";
import { View, StyleSheet, FlatList } from "react-native";
import { IconName } from "../types/IconName";
import { ButtonComponent } from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import { ListingEditScreen } from "./ListingEditScreen";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileRootStackParamList } from "../types/NavigationTypes";
import routes from "../components/navigators/routes";

type menuItem = {
  icon: IconName;
  title: string;
  targetScreen: string;
};

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
}

// type RootStackParamList = {
//   Profile: undefined; // No params expected for ProfileScreen
//   "New listing": undefined; // No params expected for ListingEditScreen
// };

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  ProfileRootStackParamList,
  typeof routes.PROFILE,
  typeof routes.MESSAGES
>;

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const menuItems: menuItem[] = [
    { icon: "format-list-bulleted", title: "My listings", targetScreen: "" },
    { icon: "email", title: "My messages", targetScreen: routes.MESSAGES },
  ];
  // const navigation = useNavigation()
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
              <MenuItem
                title={item.title}
                icon={item.icon}
                onPress={() => navigation.navigate(routes.MESSAGES)}
              />
            </View>
          )}
        />
      </View>
      <View>
        <MenuItem
          title="Log out"
          icon="logout"
          onPress={() => console.log("log out pressed")}
        />
      </View>
      {/* <ButtonComponent
        title="New listing"
        onPress={() => navigation.navigate("New listing")}
      ></ButtonComponent> */}
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
