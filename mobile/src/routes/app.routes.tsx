import { EditCar } from "../screens/EditCar";
import { CreateCar } from "../screens/CreateCar";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator screenOptions={{ headerShown: false }}>
    <AppStack.Screen name="Home" component={Home} />
    <AppStack.Screen name="EditCar" component={EditCar} />
    <AppStack.Screen name="CreateCar" component={CreateCar} />
  </AppStack.Navigator>
);

export default AppRoutes;
