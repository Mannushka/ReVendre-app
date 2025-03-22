import { Screen } from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import { AppFormPicker } from "../components/forms/AppFormPicker";
import { View, StyleSheet } from "react-native";
import * as yup from "yup";
import Colors from "../utils/Colors";

export const ListingEditScreen = () => {
  const initialValues = {
    title: "",
    price: "",
    category: null,
    description: "",
  };
  const validationSchema = yup.object().shape({
    title: yup.string().required().min(1).label("Title"),
    price: yup.number().required().min(1).max(10000).label("Price"),
    category: yup.object().required().nullable().label("Category"),
    description: yup.string().label("Description"),
  });

  const categories = [
    {
      label: "Furniture",
      value: 1,
    },
    {
      label: "Clothing",
      value: 2,
    },
    {
      label: "Electronics",
      value: 3,
    },
  ];
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
          <AppFormPicker
            items={categories}
            fieldName="category"
            placeholder="Category"
          ></AppFormPicker>
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
