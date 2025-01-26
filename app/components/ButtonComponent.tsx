import React from "react";
import { Button, View, StyleSheet } from "react-native";
interface ButtonProps {
  title: string;
  color?: string;
  backgroundColor?: string;
  onClick: () => void;
}
export const ButtonComponent: React.FC<ButtonProps> = (props) => {
  return (
    <View style={[styles.button, { backgroundColor: props.backgroundColor }]}>
      <Button title={props.title} color={props.color} onPress={props.onClick} />
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
