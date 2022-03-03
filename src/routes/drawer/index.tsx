import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import TabNavigator from '@routes/tab';
import Other from '@views/Other';

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
            label="Other"
            onPress={() => {
              props.navigation.navigate('Other');
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
        name="Other"
        component={Other}
        options={({ navigation }) => ({
          title: 'Other',
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
