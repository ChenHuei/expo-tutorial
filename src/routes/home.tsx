import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@views/Home';
import ReviewDetail from '@views/ReviewDetail';
// import Header from '@components/Header';

const Stack = createNativeStackNavigator();

export const HomeStackScreen = () => {
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
