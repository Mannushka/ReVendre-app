import { Screen } from "../components/Screen";
import {
  AppForm,
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import { AppFormPicker as Picker } from "../components/forms/AppFormPicker";
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
          <FormField fieldName="title" placeholder="Title"></FormField>
          <FormField
            fieldName="price"
            placeholder="Price"
            keyboardType="numeric"
            inputFieldWidth="40%"
          ></FormField>
          <Picker
            pickerWidth="60%"
            items={categories}
            fieldName="category"
            placeholder="Category"
          ></Picker>
          <FormField
            fieldName="description"
            placeholder="Description"
          ></FormField>
          <SubmitButton title="Post" color={Colors.BLACK} />
        </View>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
});
