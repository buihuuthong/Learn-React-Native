import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import ImageLocal from '../components/ImageLocal';
import IMAGE from '../constants/image';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          paddingVertical: 5,
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarStyle: {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          elevation: 5,
          borderTopWidth: 0,
          height: 60,
          paddingVertical: 10,
        },
        tabBarShowLabel: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <ImageLocal color={color} image={IMAGE.home} />
          ),
          title: 'Trang chủ',
        }}
        name="Home"
        component={HomeScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
