import React from "react";
import HomeScreen from "./src/HomeScreen";
import DetailsScreen from "./src/DetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PaperProvider } from "react-native-paper";
import CustomNavigationBar from "./src/CustomNavigationBar";
import CustomDrawerContent from "./src/CustomDrawerContent";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Detail"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Detail" component={DetailsScreen} />
        </Drawer.Navigator>

        <Stack.Navigator>
          initialRouteName name ="Home" screenOptions=
          {{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};
export default App;
const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
