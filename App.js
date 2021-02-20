import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TextInput,
} from "react-native";
import ImageElement from "./src/components/ImageElement";
const images = [
  {
    title: "tiger",
    img: require("./src/images/1.jpg"),
  },
  {
    title: "big foot",
    img: require("./src/images/2.jpg"),
  },
  {
    title: "menions",
    img: require("./src/images/3.jpg"),
  },
  {
    title: "kentaky",
    img: require("./src/images/4.jpg"),
  },
  {
    title: "unicorns",
    img: require("./src/images/5.jpg"),
  },
  {
    title: "moana",
    img: require("./src/images/6.jpg"),
  },
  {
    title: "home",
    img: require("./src/images/7.jpg"),
  },
  {
    title: "snoopy",
    img: require("./src/images/8.jpg"),
  },
  {
    title: "super hero",
    img: require("./src/images/9.jpg"),
  },
];

export default function App() {
  const [imageRefrence, setImageRefrence] = useState(images);
  const [currentImages, setImages] = useState(images);
  const [text, setText] = useState("");

  const getImages = () => {
    console.log(currentImages);
    return currentImages.map((val) => {
      return (
        <View key={val.title} style={styles.imageWrap}>
          <ImageElement imageSource={val.img} />
        </View>
      );
    });
  };

  const search = (text) => {
    setText(text);
    let tempArray = currentImages;
    for (let i = 0; i < tempArray.length; i++) {
      if (text == tempArray[i].title) {
        console.log();
        setImages([tempArray[i]]);
      }
    }
    if (!text) {
      setImages(imageRefrence);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        value={text}
        style={styles.textInput}
        onChangeText={(nt) => {
          search(nt);
        }}
      />
      <View style={styles.grid}>{getImages()}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
    paddingTop: 20,
  },
  textInput: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 8,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#252525",
    borderRadius: 5,
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2,
  },

  imageWrap: {
    padding: 2,
    height: 120,
    width: Dimensions.get("window").width / 2 - 7,
  },
});
