import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Account from '@views/Account';

const AccountStackScreen = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="AccountStack"
      screenOptions={{
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#42C2FF',
          height: 80,
        },
      }}
    >
      <Stack.Screen
        name="AccountStack"
        component={Account}
        options={({ navigation }) => ({
          title: 'Account',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.headerLeft}>
              <Icon name="bars" size={20} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
});

export default AccountStackScreen;
