import { DimensionValue, View } from "react-native";
import { useFormikContext } from "formik";
import { AppPicker } from "../AppPicker";
import { IconName } from "../../types/IconName";
import { Category } from "../../types/Category";
import { ElementType } from "react";

interface AppFormPickerProps {
  icon?: IconName;
  placeholder?: string;
  items: Category[];
  fieldName: string;
  pickerWidth?: DimensionValue;
  PickerItemComponent: React.FunctionComponent;
}

export const AppFormPicker: React.FC<AppFormPickerProps> = ({
  icon,
  items,
  placeholder,
  fieldName,
  pickerWidth,
  PickerItemComponent,
}) => {
  const { setFieldValue, touched, errors, values } = useFormikContext<any>();

  return (
    <View>
      <AppPicker
        icon={icon}
        items={items}
        placeholder={placeholder}
        pickerWidth={pickerWidth}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => {
          setFieldValue(fieldName, item);
        }}
        selectedItem={values[fieldName]}
      ></AppPicker>
    </View>
  );
};
