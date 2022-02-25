import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = (props: ButtonProps) => {
  const { text, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#f01d71',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Button;
export type { ButtonProps };
