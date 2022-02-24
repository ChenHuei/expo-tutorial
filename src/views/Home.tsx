import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '@styles/globals';

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Home</Text>
    </View>
  );
};

export default Home;
export type { HomeProps };
