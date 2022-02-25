import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '@styles/globals';
import { RouteProp } from '@react-navigation/native';

import Card from '@components/Card';

import { Review } from './Home';

interface ReviewDetailProps {
  navigation: any;
  route: RouteProp<{ params: Review }, 'params'>;
}

const ReviewDetail = (props: ReviewDetailProps) => {
  const { route } = props;
  const { title, message, rating } = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.title}>{title}</Text>
        <Text>{message}</Text>
        <View style={styles.rating}>
          <Text>rating: </Text>
          {[...Array(parseInt(rating)).keys()].map((key) => (
            <Image key={key} source={require('@assets/rating.png')} />
          ))}
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
  },
});

export default ReviewDetail;
export type { ReviewDetailProps };
