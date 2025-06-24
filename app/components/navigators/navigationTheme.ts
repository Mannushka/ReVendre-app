import { DefaultTheme } from "@react-navigation/native";
import Colors from "../../utils/Colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.BUTTON_CORAL,
    background: Colors.BEIGE_LIGHT,
    card: Colors.BUTTON_CORAL,
    text: Colors.WHITE,
    border: Colors.BUTTON_CORAL,
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
};
