import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import AccountScreen from '../screens/lesson7/AccountScreen';
import HomeScreen from '../screens/lesson7/HomeScreen';

const Tab = createBottomTabNavigator();

// Bottom tab nè (menu ở dưới)

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/home.png')}
              style={{width: 20, height: 20}}
            />
          ),
          title: 'Trang chủ',
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <Image
              source={require('../assets/profile.png')}
              style={{width: 20, height: 20}}
            />
          ),
          title: 'Tài khoản',
        }}
        name="AccountScreen"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
