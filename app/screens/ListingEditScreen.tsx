import { Screen } from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { View, StyleSheet } from "react-native";
import * as yup from "yup";
import Colors from "../utils/Colors";

export const ListingEditScreen = () => {
  const initialValues = {
    title: "",
    price: 0,
    description: "",
  };
  const validationSchema = yup.object().shape({
    title: yup.string().required().min(1).label("Title"),
    price: yup.number().required().min(1).max(10000),
    description: yup.string().optional(),
  });
  return (
    <Screen>
      <AppForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        <View style={styles.container}>
          <AppFormField fieldName="title" placeholder="Title"></AppFormField>
          <AppFormField fieldName="price" placeholder="Price"></AppFormField>
          <AppFormField
            fieldName="description"
            placeholder="Description"
          ></AppFormField>
          <SubmitButton title="Post" color={Colors.BLACK} />
        </View>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
