import React from 'react';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { Review } from '@views/Home';

const formSchema = yup.object({
  title: yup.string().required().min(4),
  message: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      'rating',
      'Rating must be a number 1 - 5',
      (val) => val !== undefined && parseInt(val) > 0 && parseInt(val) < 6,
    ),
});

interface FormProps {
  addReview: (value: Review) => void;
}

const Form = (props: FormProps) => {
  const { addReview } = props;

  return (
    <View style={styles.form}>
      <Formik
        initialValues={{ title: '', message: '', rating: '' } as Review}
        validationSchema={formSchema}
        onSubmit={(values, action) => {
          action.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="review title"
              value={props.values.title}
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
            />
            <Text style={styles.error}>{props.touched.title && props.errors.title}</Text>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={styles.input}
              placeholder="review message"
              value={props.values.message}
              onChangeText={props.handleChange('message')}
              onBlur={props.handleBlur('message')}
            />
            <Text style={styles.error}>{props.touched.message && props.errors.message}</Text>
            <Text style={styles.label}>Rating</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="rating 1~5"
              value={props.values.rating}
              onChangeText={props.handleChange('rating')}
              onBlur={props.handleBlur('rating')}
            />
            <Text style={styles.error}>{props.touched.rating && props.errors.rating}</Text>
            {/* TODO: fix type error */}
            <Button color="maroon" title="Submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  label: {
    marginBottom: 10,
  },
  error: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 2,
  },
  input: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
  },
});

export default Form;
export type { FormProps };
