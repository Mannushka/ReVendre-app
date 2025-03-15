import React from "react";
import { Button, View, StyleSheet } from "react-native";
interface ButtonProps {
  title: string;
  color?: string;
  backgroundColor?: string;
  onClick: () => void;
}
export const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  color,
  backgroundColor,
  onClick,
}) => {
  return (
    <View style={[styles.button, { backgroundColor: backgroundColor }]}>
      <Button title={title} color={color} onPress={onClick} />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: "10%",
    padding: 1,
    width: 160,
    opacity: 0.8,
  },
});
