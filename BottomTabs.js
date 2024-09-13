import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-paper';
import Supermarket from './pages/Supermarket';
import Electronics from './pages/Electronics';
import Sports from './pages/Sports';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Supermarket"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Supermarket"
        component={Supermarket}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon source="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Electronics"
        component={Electronics}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon source="tools" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sports"
        component={Sports}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon source="soccer" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
