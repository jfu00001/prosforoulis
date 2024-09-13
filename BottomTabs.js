import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Icon} from 'react-native-paper';
import Supermarket from './pages/Supermarket';
import Electronics from './pages/Electronics';
import Sports from './pages/Sports';
import PdfViewer from './components/PdfViewer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SupermarketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Supermarket" component={Supermarket} />
      <Stack.Screen name="Offers" component={PdfViewer} />
    </Stack.Navigator>
  );
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Supermarket"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Supermarket"
        component={SupermarketStack}
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
