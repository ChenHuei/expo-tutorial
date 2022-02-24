import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface ReviewDetailProps {}

const ReviewDetail = (props: ReviewDetailProps) => {
  return (
    <View style={styles.container}>
      <Text>ReviewDetail</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default ReviewDetail;
export type { ReviewDetailProps };
