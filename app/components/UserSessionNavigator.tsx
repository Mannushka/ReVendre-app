import { MainNavigator } from "./navigators/MainNavigator";
import { AuthNavigator } from "./navigators/AuthNavigator";
import { useUser } from "@clerk/clerk-expo";
//useEffect, isSignedIn in the dependancy array
const UserSessionNavigator = () => {
  const { isLoaded, user } = useUser();
  // console.log("user: ", user);
  return <>{user ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default UserSessionNavigator;
