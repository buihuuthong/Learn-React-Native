import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentsOverview from '../screens/Lesson1/ComponentsOverview';
import AdvancedComponents from '../screens/Lesson1/AdvancedComponents'; 

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
        {/* <Stack.Screen name="ComponentsOverview" component={ComponentsOverview} /> */}
        <Stack.Screen name="AdvancedComponents" component={AdvancedComponents} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
