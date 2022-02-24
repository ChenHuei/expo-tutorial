import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import { globalStyles } from '@styles/globals';
import Card from '@components/Card';

interface Review {
  title: string;
  message: string;
  rating: number;
  key: number;
}

interface HomeProps {
  navigation: any;
}

const Home = (props: HomeProps) => {
  const { navigation } = props;
  const [reviews, setReviews] = useState<Review[]>(
    [...Array(5).keys()].map((item) => ({
      title: `title ${item}`,
      message: `message ${item}`,
      rating: item,
      key: item,
    })),
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail', item)}>
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
              <Text>{item.message}</Text>
              <Text>{item.rating}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
export type { HomeProps, Review };
