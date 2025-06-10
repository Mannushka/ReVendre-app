import { useEffect, useState } from "react";
import { UserLocation } from "../types/UserLocation";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState<UserLocation | null>(null);
  try {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setLocation({ latitude, longitude });
    };
    useEffect(() => {
      getLocation();
    }, []);
  } catch (error) {
    console.log(error);
  }
  return location;
};
