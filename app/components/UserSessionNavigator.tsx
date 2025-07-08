import { BottomNavigator } from "./navigators/BottomNavigator";
import { AuthNavigator } from "./navigators/AuthNavigator";
import { useUser } from "@clerk/clerk-expo";

const UserSessionNavigator = () => {
  const { user } = useUser();
  console.log(user);
  return <>{user ? <BottomNavigator /> : <AuthNavigator />}</>;
};

export default UserSessionNavigator;
