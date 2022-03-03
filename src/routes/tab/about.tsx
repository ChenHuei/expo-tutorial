import { createStackNavigator } from '@react-navigation/stack';

import About from '@views/About';

const Stack = createStackNavigator();

export const AboutStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
