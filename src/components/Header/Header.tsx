import React from 'react';
import { StyleSheet, Text, ImageBackground } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => (
  <ImageBackground source={require('@assets/bg.png')} style={styles.header} resizeMode="cover">
    <Text style={styles.headerText}>{title}</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
});

export default Header;
export type { HeaderProps };
