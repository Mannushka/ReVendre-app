import { View, StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { AppPicker } from "../AppPicker";
import { IconName } from "../../types/IconName";
import { PickerItemType } from "../../types/PickerItemType";

interface AppFormPickerProps {
  icon?: IconName;
  placeholder?: string;
  items: PickerItemType[];
  fieldName: string;
}

export const AppFormPicker: React.FC<AppFormPickerProps> = ({
  icon,
  items,
  placeholder,
  fieldName,
}) => {
  const { setFieldValue, touched, errors, values } = useFormikContext<any>();

  return (
    <View>
      <AppPicker
        icon={icon}
        items={items}
        placeholder={placeholder}
        onSelectItem={(item) => {
          setFieldValue(fieldName, item);
        }}
        selectedItem={values[fieldName]}
      ></AppPicker>
    </View>
  );
};
