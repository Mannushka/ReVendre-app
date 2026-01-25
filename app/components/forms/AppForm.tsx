import { Formik } from "formik";
import { View } from "react-native";
import { ListingFormValues } from "../../types/Listing";

interface AppFormProps {
  initialValues: ListingFormValues;
  onSubmit: (values: ListingFormValues) => void | Promise<void>;
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
        // onSubmit={async (values, { resetForm, setSubmitting }) => {
        //   try {
        //     await onSubmit(values);
        //     resetForm();
        //   } finally {
        //     setSubmitting(false);
        //   }
        // }}
        validationSchema={validationSchema}
      >
        {() => <>{children}</>}
      </Formik>
    </View>
  );
};
