import { Formik } from "formik";
import { View } from "react-native";

interface AppFormProps {
  initialValues: object;
  onSubmit: () => void;
  validationSchema: object;
  children: JSX.Element;
}
export const AppForm: React.FC<AppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {() => <>{children}</>}
      </Formik>
    </View>
  );
};
