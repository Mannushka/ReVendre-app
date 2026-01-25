import { Platform } from "react-native";
const IOS_SIMULATOR_HOST = "http://127.0.0.1:3000";
const ANDROID_EMULATOR_HOST = "http://10.0.2.2:3000";

export const BACKEND_URL = Platform.select({
  ios: IOS_SIMULATOR_HOST,
  android: ANDROID_EMULATOR_HOST,
  default: IOS_SIMULATOR_HOST,
})!;
