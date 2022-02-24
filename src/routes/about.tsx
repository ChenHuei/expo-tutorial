import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from '@views/About';

const Stack = createNativeStackNavigator();

export const AboutStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
