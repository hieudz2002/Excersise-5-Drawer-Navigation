import React from "react";
import { Menu, Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

const CustomNavigationBar = ({ navigator, route, options, back }) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigator.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Menu>
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
          <MenuItem
            onPress={() => {
              console.log("Option 1 was pressed");
            }}
            tile="Home"
          />
          <MenuItem
            onPress={() => {
              navigation.navigate("Details");
            }}
            tile="Details"
          />
          <MenuItem
            onPress={() => {
              console.log("Option 3 was pressed");
            }}
            tile="Option 3"
            disabled
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};
export default CustomNavigationBar;
