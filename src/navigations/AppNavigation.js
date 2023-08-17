import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentsOverview from '../screens/Lesson3/ComponentsOverview';
import AdvancedComponents from '../screens/Lesson3/AdvancedComponents'; 
import ParentComponent from '../screens/lesson4/Props'
import State from '../screens/lesson4/State';
import ExampleComponent from '../screens/lesson4/Example';
import BasicComponent from '../screens/lession5/BasicComponent';

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
          {/* Bài 3 */}
        {/* <Stack.Screen name="ComponentsOverview" component={ComponentsOverview} /> */}
        {/* <Stack.Screen name="AdvancedComponents" component={AdvancedComponents} /> */}

        {/* Bài 4 */}
        {/* <Stack.Screen name="ParentComponent" component={ParentComponent} /> */}
        {/* <Stack.Screen name="State" component={State} /> */}
        {/* <Stack.Screen name="ExampleComponent" component={ExampleComponent} /> */}

        {/* Bài 5 */}
        <Stack.Screen name="BasicComponent" component={BasicComponent} />
        
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
