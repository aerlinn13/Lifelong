import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import DailyReportScreen from './screens/DailyReportScreen';
import DashboardScreen from './screens/DashboardScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="DailyReport" component={DailyReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
};
