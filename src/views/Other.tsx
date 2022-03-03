import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '@styles/globals';

interface OtherProps {}

const Other = () => {
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.center }}>
      <Text style={globalStyles.title}>Other</Text>
    </View>
  );
};

export default Other;
export type { OtherProps };
