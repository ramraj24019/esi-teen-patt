import React from "react";
import ChipShop from "./src/components/ChipShop";
import LoginScreen from "./src/components/LoginScreen";
import AdminPanel from "./src/screens/AdminPanel";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ChipShop" component={ChipShop} />
        <Stack.Screen name="AdminPanel" component={AdminPanel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
