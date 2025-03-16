import { ButtonComponent } from "../ButtonComponent";
import { useFormikContext } from "formik";
interface SubmitButtonProps {
  title: string;
  color?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ title, color }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <ButtonComponent
      title={title}
      color={color}
      onPress={handleSubmit}
    ></ButtonComponent>
  );
};
