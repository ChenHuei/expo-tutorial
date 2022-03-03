import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeStackScreen from './home';
import AccountStackScreen from './account';

const getTabIconName = (routeName: string, focused: boolean) => {
  let iconName;

  switch (routeName) {
    case 'HomeTab':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'AccountTab':
      iconName = focused ? 'account' : 'account-outline';
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
        headerShown: false,
        tabBarActiveTintColor: '#42C2FF',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={getTabIconName(route.name, focused)}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen
        name="AccountTab"
        component={AccountStackScreen}
        options={{ tabBarLabel: 'Account' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
