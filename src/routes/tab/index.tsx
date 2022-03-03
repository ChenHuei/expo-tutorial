import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { HomeStackScreen } from './home';
import { AboutStackScreen } from './about';

const getTabIconName = (routeName: string, focused: boolean) => {
  let iconName;

  switch (routeName) {
    case 'Index':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Info':
      iconName = focused ? 'information' : 'information-outline';
      break;
    default:
  }

  return iconName as React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={getTabIconName(route.name, focused)}
            size={size}
            color={color}
          />
        ),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Index" component={HomeStackScreen} />
      <Tab.Screen name="Info" component={AboutStackScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
