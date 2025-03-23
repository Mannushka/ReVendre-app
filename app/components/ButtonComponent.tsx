import React from "react";
import { Button, View, StyleSheet, DimensionValue } from "react-native";
interface ButtonProps {
  backgroundColor?: string;
  buttonWidth?: DimensionValue;
  color?: string;
  title: string;
  onPress: () => void;
}
export const ButtonComponent: React.FC<ButtonProps> = ({
  backgroundColor,
  buttonWidth,
  color,
  title,
  onPress,
}) => {
  const width = buttonWidth ? buttonWidth : "100%";
  return (
    <View
      style={[
        styles.button,
        { backgroundColor: backgroundColor },
        { width: width },
      ]}
    >
      <Button color={color} title={title} onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: "8%",
    padding: 10,
    opacity: 0.8,
    alignSelf: "center",
    marginTop: 20,
  },
});
