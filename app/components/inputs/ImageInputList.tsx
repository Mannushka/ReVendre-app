import { View, StyleSheet, ScrollView } from "react-native";
import { ImageInput } from "./ImageInput";
import { ImageItem } from "../ImageItem";
import { useRef } from "react";

interface ImageInputListProps {
  imageUris: string[] | [];
  addImage: () => void;
  removeImage: (imageUri: string) => void;
}

export const ImageInputList: React.FC<ImageInputListProps> = ({
  imageUris,
  addImage,
  removeImage,
}) => {
  const scrollView = useRef<ScrollView>(null);
  // console.log("image uris in input list", imageUris);
  const images = imageUris?.map((imageUri, index) => (
    <View key={index} style={styles.image}>
      <ImageItem
        imageUri={imageUri}
        width={100}
        height={100}
        borderRadius="10%"
        onRemoveImage={removeImage}
      />
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current?.scrollToEnd()}
      >
        {!!imageUris && images}
        <ImageInput addImage={addImage} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },

  image: {
    marginHorizontal: 4,
  },
});
