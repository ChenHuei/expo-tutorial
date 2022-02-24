import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface AboutProps {}

const About = (props: AboutProps) => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default About;
export type { AboutProps };
