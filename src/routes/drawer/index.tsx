import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import TabNavigator from '@routes/tab';
import Notification from '@views/Notification';

interface DrawerNavigatorProps {}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItem
            label="Home"
            onPress={() => {
              props.navigation.navigate('HomeStack');
            }}
          />
          <DrawerItem
            label="Notification"
            onPress={() => {
              props.navigation.navigate('Notification');
            }}
          />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{ title: 'Home', headerShown: false }}
      />
      <Drawer.Screen
        name="Notification"
        component={Notification}
        options={({ navigation }) => ({
          title: 'Notification',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#42C2FF',
            height: 80,
          },
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
    </Drawer.Navigator>
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

export default DrawerNavigator;
