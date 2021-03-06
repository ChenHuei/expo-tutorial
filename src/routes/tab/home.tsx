import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home, { Review } from '@views/Home';
import ReviewDetail from '@views/ReviewDetail';

const HomeStackScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#42C2FF',
          height: 80,
        },
      }}
    >
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
              <Icon name="bars" size={20} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={styles.headerRight}>
              <Icon name="bell" size={20} color="#fff" />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="ReviewDetailStack"
        component={ReviewDetail}
        options={({ route }) => ({
          title: (route.params as Review).title,
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerRight: {
    marginRight: 15,
  },
});

export default HomeStackScreen;
