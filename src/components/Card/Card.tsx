import React, { PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';

interface CardProps {}

const Card = (props: PropsWithChildren<CardProps>) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 6,
    marginHorizontal: 4,
  },
  content: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});

export default Card;
export type { CardProps };
