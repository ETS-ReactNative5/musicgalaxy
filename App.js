
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from 'react-native-splash-screen';
import { load } from '@src/utils/storage';
import { Text, StatusBar } from 'react-native';
import { Navigation } from '@src/navigation';
import store from '@src/redux/store';
import ErrorBoundary from 'react-native-error-boundary'
import { FallBackUI } from '@src/components/fallback/fallback';

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
      const isFirstTime = await load('new_app_installed');
      if (!isFirstTime) {
        setFirstLaunchFlag(true);
      } else {
        setFirstLaunchFlag(false);
      }
    })();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          {firstLaunchFlag === null ? (
            <Text>Some Splash Screen</Text>
          ) : (
            <ErrorBoundary FallbackComponent={FallBackUI}>
              <Navigation firstLaunchFlag={firstLaunchFlag} />
            </ErrorBoundary>

          )}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
