import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import DailyReportScreen from './screens/DailyReportScreen';
import DashboardScreen from './screens/DashboardScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoadingScreen from './screens/LoadingScreen';

import initialState from './state/model';
import reducer from './state/reducer';

const Stack = createStackNavigator();
const store = createStore(
  reducer,
  initialState);

if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

const fetchFonts = () => {
  return Font.loadAsync({
  'LoraBold': require('./assets/fonts/Lora-Bold.ttf'),
  'LoraItalic': require('./assets/fonts/Lora-Italic.ttf'),
  'LoraRegular': require('./assets/fonts/Lora-Regular.ttf')
  });
  };

export default function App() {
  const [fontsLoaded, setFontsLoaded ] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Loading" screenOptions={{
          headerShown: false
          }}>
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="DailyReport" component={DailyReportScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};
