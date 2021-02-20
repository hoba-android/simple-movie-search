import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const ImageElement = (props) => {
  return (
    <Image
      source={props.imageSource}
      style={{ flex: 1, width: null, alignSelf: "stretch" }}
    />
  );
};

export default ImageElement;

const styles = StyleSheet.create({
  imagestyle: {
    resizeMode: "cover",
  },
});
