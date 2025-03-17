import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import Colors from "../utils/Colors";
import { IconName } from "../types/IconName";
import { useState } from "react";
import { Screen } from "./Screen";
import { PickerItem } from "./PickerItem";
import { PickerItemType } from "../types/PickerItemType";

interface AppPickerProps {
  icon?: IconName;
  placeholder?: string;
  items: PickerItemType[];
  selectedItem: PickerItemType;
  onSelectItem: (item: PickerItemType) => void;
}
export const AppPicker: React.FC<AppPickerProps> = ({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons style={styles.icon} size={16} name={icon} />
          )}
          <TextInput style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </TextInput>
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
    width: "80%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    flex: 1,
    fontSize: 17,
    fontWeight: "600",
  },
});
