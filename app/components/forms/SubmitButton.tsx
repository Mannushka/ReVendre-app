import { DimensionValue } from "react-native";
import { ButtonComponent } from "../ButtonComponent";
import { useFormikContext } from "formik";
interface SubmitButtonProps {
  color?: string;
  backgroundColor?: string;
  title: string;
  width?: DimensionValue;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  backgroundColor,
  color,
  title,
  width,
}) => {
  const { handleSubmit } = useFormikContext();
  return (
    <ButtonComponent
      backgroundColor={backgroundColor}
      color={color}
      title={title}
      buttonWidth={width}
      onPress={handleSubmit}
    ></ButtonComponent>
  );
};
