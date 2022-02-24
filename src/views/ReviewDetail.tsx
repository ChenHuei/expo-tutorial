import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '@styles/globals';

interface ReviewDetailProps {}

const ReviewDetail = (props: ReviewDetailProps) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>ReviewDetail</Text>
    </View>
  );
};

export default ReviewDetail;
export type { ReviewDetailProps };
