import { useEffect, useState } from "react";
import { UserLocation } from "../types/UserLocation";
import * as Location from "expo-location";

export const useLocation = () => {
  const [location, setLocation] = useState<UserLocation | null>(null);
  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          console.log("Location permission not granted");
          return;
        }

        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({});
        setLocation({ latitude, longitude });
      } catch (error) {
        console.log("Error getting location:", error);
      }
    };

    getLocation();
  }, []);

  return location;
};
