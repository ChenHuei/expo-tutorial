import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '@styles/globals';

interface AccountProps {}

const Account = () => {
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.center }}>
      <Text style={globalStyles.title}>Account</Text>
    </View>
  );
};

export default Account;
export type { AccountProps };
