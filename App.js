/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {Provider} from 'react-redux';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import { navigationRef, isReadyRef } from '@src/navigation/root-navigation';
import { load, save } from '@src/utils/storage';
import { Text, StatusBar} from 'react-native';
import { Navigation } from '@src/navigation';
import store from '@src/redux/store';

import {
  setCustomText,
} from 'react-native-global-props';

// Setting default styles for all Text components.
const customTextProps = {
  style: {
    fontFamily: Platform.OS === 'ios' ? 'baskerville' : 'notoserif',
  }
};


setCustomText(customTextProps);

const App = () => {

  const [firstLaunchFlag, setFirstLaunchFlag] = useState(null);

  useEffect(() => {
    SplashScreen.hide();
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
  }, [])

  useEffect(() => {
    (async () => {
      const isFirstTime = await load('isFirstTime');
      console.log('ASYNC STORAGE', isFirstTime)
      if (isFirstTime === null) {
        setFirstLaunchFlag(true);
        save('isFirstTime', true);
      } else {
        setFirstLaunchFlag(false);
      }
    })();
  }, []);

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>
        {firstLaunchFlag === null ? (
          <Text>Some Splash Screen</Text>
        ) : (
          <Navigation firstLaunchFlag={true} />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  );
};

export default App;
