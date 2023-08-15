import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from './BottomTab';
import LoginScreen from '../screens/login/LoginScreen';

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
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
