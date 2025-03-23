import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Text,
  DimensionValue,
} from "react-native";
import Colors from "../utils/Colors";
import { IconName } from "../types/IconName";
import { useState } from "react";
import { Screen } from "./Screen";
import { PickerItem } from "./PickerItem";
import { Category } from "../types/Category";

interface AppPickerProps {
  icon?: IconName;
  placeholder?: string;
  items: Category[];
  pickerWidth?: DimensionValue;
  selectedItem: Category;
  onSelectItem: (item: Category) => void;
}
export const AppPicker: React.FC<AppPickerProps> = ({
  icon,
  items,
  placeholder,
  pickerWidth,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const width: DimensionValue = pickerWidth ? pickerWidth : "100%";
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons style={styles.icon} size={16} name={icon} />
          )}

          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}
          <MaterialCommunityIcons size={16} name="chevron-down" />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <View>
            <Text>Choose category</Text>
            <FlatList
              contentContainerStyle={styles.grid}
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <PickerItem
                  label={item.label}
                  color={item.color}
                  iconName={item.icon}
                  onPress={() => {
                    setModalVisible(false), onSelectItem(item);
                  }}
                />
              )}
            />
            <Button
              title="Close"
              color={Colors.BLACK}
              onPress={() => setModalVisible(false)}
            />
          </View>
        </Screen>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: 10,
    marginTop: 10,
    marginBottom: 30,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: Colors.BLACK,
  },
  placeholder: {
    flex: 1,
    fontSize: 16,
    color: Colors.GRAY_LIGHT300,
  },
});
