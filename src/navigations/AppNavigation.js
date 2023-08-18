import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComponentsOverview from '../screens/lesson3/ComponentsOverview';
import AdvancedComponents from '../screens/lesson3/AdvancedComponents'; 
import ParentComponent from '../screens/lesson4/Props'
import State from '../screens/lesson4/State';
import ExampleComponent from '../screens/lesson4/Example';
import BasicComponent from '../screens/lesson5/BasicComponent';
import BasicHook from '../screens/lesson6/BasicHook';
import AdvancedHook from '../screens/lesson6/AdvancedHook';

// Có mở ở trên thì cmt ở dưới lại vì trùng tên nhe

// import LoginScreen from '../screens/lesson7/LoginScreen';
import BottomTab from './BottomTab';
import BasicApi from '../screens/lesson8/BasicApi';
import AxiosApi from '../screens/lesson8/AxiosApi';
import BasicForm from '../screens/lesson9/BasicForm';
import LoginScreen from '../screens/lesson11/login/LoginScreen';
import HomeScreen from '../screens/lesson11/home/HomeScreen';
import RegisterScreen from '../screens/lesson11/login/RegisterScreen';

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
        {/* <Stack.Screen name="BasicComponent" component={BasicComponent} /> */}

        {/* Bài 6 */}
        {/* <Stack.Screen name="BasicHook" component={BasicHook} /> */}
        {/* <Stack.Screen name="AdvancedHook" component={AdvancedHook} /> */}

        {/* Bài 7 */}
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} /> */}

        {/* Bai 8 */}
        {/* <Stack.Screen name="BasicApi" component={BasicApi} /> */}
        {/* <Stack.Screen name="AxiosApi" component={AxiosApi} /> */}

        {/* Bài 9 */}
        {/* <Stack.Screen name="BasicForm" component={BasicForm} /> */}
        
        {/* Bài 11 */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
