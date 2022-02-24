import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { HomeStackScreen } from '@routes/home';
import About from '@views/About';

const Tab = createBottomTabNavigator();

const getTabIconName = (routeName: string, focused: boolean) => {
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'About':
      iconName = focused ? 'information' : 'information-outline';
      break;
    default:
  }

  return iconName as React.ComponentProps<typeof MaterialCommunityIcons>['name'];
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  return fontLoaded ? (
    <>
      <NavigationContainer>
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
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  ) : (
    <AppLoading
      startAsync={() =>
        Font.loadAsync({
          'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
          'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        })
      }
      onFinish={() => setFontLoaded(true)}
      onError={() => {
        console.log('error');
      }}
    />
  );
}
