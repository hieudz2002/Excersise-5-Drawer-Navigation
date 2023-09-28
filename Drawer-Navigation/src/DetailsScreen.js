import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const DetailsScreen = () => {
  return (
    <View style={style.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
