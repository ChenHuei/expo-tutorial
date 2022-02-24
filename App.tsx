import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import { globalStyles } from '@styles/globals';
import Home from '@views/Home';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  return fontLoaded ? (
    <View style={globalStyles.container}>
      <Home />
      <StatusBar style="auto" />
    </View>
  ) : (
    <AppLoading
      startAsync={() =>
        Font.loadAsync({
          'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
          'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
        })
      }
      onFinish={() => setFontLoaded(true)}
      onError={() => {
        console.log('error');
      }}
    />
  );
}
