import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '@views/Home';
import ReviewDetail from '@views/ReviewDetail';

const Stack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="ReviewList">
      <Stack.Screen name="ReviewList" component={Home} />
      <Stack.Screen name="ReviewDetail" component={ReviewDetail} />
    </Stack.Navigator>
  );
};
