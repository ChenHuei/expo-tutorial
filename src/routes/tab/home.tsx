import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@views/Home';
import ReviewDetail from '@views/ReviewDetail';
// import Header from '@components/Header';

export const HomeStackScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        // options={() => ({
        //   headerTitle: () => <Header title="Home" />,
        // })}
      />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
    </Stack.Navigator>
  );
};
