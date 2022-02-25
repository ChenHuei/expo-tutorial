import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Keyboard,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { globalStyles } from '@styles/globals';
import Card from '@components/Card';
import Form from '@components/Form/Form';

interface Review {
  title: string;
  message: string;
  rating: string;
  key: number;
}

interface HomeProps {
  navigation: any;
}

const Home = (props: HomeProps) => {
  const { navigation } = props;
  const [open, setOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(
    [...Array(3).keys()].map((item) => ({
      title: `title ${item + 1}`,
      message: `message ${item + 1}`,
      rating: `${item + 1}`,
      key: item,
    })),
  );

  const addReview = (review: Omit<Review, 'key'>) => {
    setReviews((pre) => [{ ...review, key: new Date().getTime() }, ...pre]);
    setOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={open} animationType="slide">
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <MaterialIcons
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              name="close"
              size={24}
              onPress={() => setOpen(false)}
            />
            <Form addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        style={styles.modalToggle}
        name="add"
        size={24}
        onPress={() => setOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetail', item)}>
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
              <Text>{item.message}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
export type { HomeProps, Review };
