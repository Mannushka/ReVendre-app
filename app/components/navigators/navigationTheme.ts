import { DefaultTheme } from "@react-navigation/native";
import Colors from "../../utils/Colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.BUTTON_CORAL,
    background: Colors.BEIGE_LIGHT,
  },
};
