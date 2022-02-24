import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default Home;
export type { HomeProps };
