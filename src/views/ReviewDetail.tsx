import React from 'react';
import { View, Text, Button } from 'react-native';

import { globalStyles } from '@styles/globals';
import { RouteProp } from '@react-navigation/native';

import { Review } from './Home';

interface ReviewDetailProps {
  navigation: any;
  route: RouteProp<{ params: Review }, 'params'>;
}

const ReviewDetail = (props: ReviewDetailProps) => {
  const { navigation, route } = props;
  const { title, message, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>ReviewDetail</Text>
      <Text>{title}</Text>
      <Text>{message}</Text>
      <Text>{rating}</Text>
      <Button title="go to home" onPress={() => navigation.navigate('Home')}></Button>
    </View>
  );
};

export default ReviewDetail;
export type { ReviewDetailProps };
