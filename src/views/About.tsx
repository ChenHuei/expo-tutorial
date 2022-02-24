import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '@styles/globals';

interface AboutProps {}

const About = (props: AboutProps) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About</Text>
    </View>
  );
};

export default About;
export type { AboutProps };
