import { ListItem } from "../components/lists/ListItem";
import { MenuItem } from "../components/MenuItem";
import { Screen } from "../components/Screen";
import Colors from "../utils/Colors";
import { View, StyleSheet, FlatList } from "react-native";
import { IconName } from "../types/IconName";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { ProfileRootStackParamList } from "../types/NavigationTypes";
import routes from "../components/navigators/routes";
import { useUser } from "@clerk/clerk-expo";
import { useClerk } from "@clerk/clerk-expo";

type menuItem = {
  icon: IconName;
  title: string;
  targetScreen: keyof ProfileRootStackParamList;
};

type ProfileScreenRouteProp = RouteProp<
  ProfileRootStackParamList,
  typeof routes.PROFILE
>;

interface ProfileScreenProps {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
}

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  ProfileRootStackParamList,
  typeof routes.PROFILE,
  typeof routes.MESSAGES
>;
const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const { signOut } = useClerk();
  const user = useUser();
  console.log("user is signd in: ", user.isSignedIn);
  const username = user.user?.username ? user.user.username : "Anonymous user";
  const userEmail = user.user ? user.user.emailAddresses : "No email";

  const defaultAvatarUrl =
    "https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg";

  const profilePicture = user.user?.hasImage
    ? user.user.imageUrl
    : defaultAvatarUrl;

  const menuItems: menuItem[] = [
    {
      icon: "format-list-bulleted",
      title: "My listings",
      targetScreen: routes.MESSAGES, // REPLACE LATER
    },
    { icon: "email", title: "My messages", targetScreen: routes.MESSAGES },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();

      // Redirect to your desired page
      // Linking.openURL(Linking.createURL('/'))
      console.log("log out success");
      navigation.reset({ index: 0, routes: [{ name: routes.WELCOME_SCREEN }] });
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <Screen>
      <View style={styles.listItem}>
        <ListItem
          image={profilePicture}
          title={username}
          subTitle={userEmail.toString()}
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
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            </View>
          )}
        />
      </View>
      <View>
        <MenuItem title="Log out" icon="logout" onPress={handleSignOut} />
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
export default ProfileScreen;
