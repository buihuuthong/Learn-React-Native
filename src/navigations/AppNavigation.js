import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentsOverview from '../screens/Lesson3/ComponentsOverview';
import AdvancedComponents from '../screens/Lesson3/AdvancedComponents'; 

const Stack = createNativeStackNavigator();

// Đến bài nào thì dùng lệnh comment đóng bài trước lại

const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
        <Stack.Screen name="ComponentsOverview" component={ComponentsOverview} />
        <Stack.Screen name="AdvancedComponents" component={AdvancedComponents} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
