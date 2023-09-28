import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Drawer } from "react-native-paper";

const CustomDrawerContent = ({ navigator }) => {
  const [active, setActive] = React.useState('');

  return (
    <View style={style.container}>
      <Drawer.Section title="Menu">
        <Drawer.Item
          icon="home"
          label="Home"
          active={active === "home"}
          onPress={() => {
            setActive("home");
            navigator.navigate("Home");
          }}
        />

        <Drawer.Item
          icon="Detail"
          label="start"
          active={active === "detail"}
          onPress={() => {
            setActive("detail");
            navigator.navigate("Detail");
          }}
        />
      </Drawer.Section>
    </View>
  );
};
export default CustomDrawerContent;
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
