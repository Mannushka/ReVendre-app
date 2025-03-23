import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Text,
} from "react-native";
import Colors from "../utils/Colors";
import { IconName } from "../types/IconName";
import { useState } from "react";
import { Screen } from "./Screen";
import { PickerItem } from "./PickerItem";
import { Category } from "../types/CategoryType";

interface AppPickerProps {
  icon?: IconName;
  placeholder?: string;
  items: Category[];
  pickerWidth?: any;
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
  const width = pickerWidth ? pickerWidth : "100%";
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
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false), onSelectItem(item);
                }}
              />
            )}
          />
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
    // width: "85%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    flex: 1,
    fontSize: 18,
    color: Colors.BLACK,
  },
  placeholder: {
    flex: 1,
    fontSize: 15,
    color: Colors.GRAY_LIGHT300,
  },
});
