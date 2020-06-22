import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from 'react-native';
import { reactotronRedux } from 'reactotron-redux';

import DailyReportScreen from './screens/DailyReportScreen';
import DashboardScreen from './screens/DashboardScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoadingScreen from './screens/LoadingScreen';

import initialState from './state/model';
import reducer from './state/reducer';

const Stack = createStackNavigator();

let store;
if (__DEV__) {
	const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
		.configure()
		.useReactNative()
		.use(reactotronRedux())
		.connect();
	store = createStore(reducer, initialState, reactotron.createEnhancer());
} else {
	store = createStore(reducer, initialState);
}

const fetchFonts = () => {
	return Font.loadAsync({
		KhulaBold: require('./assets/fonts/Khula-Bold.ttf'),
		KhulaLight: require('./assets/fonts/Khula-Light.ttf'),
		KhulaRegular: require('./assets/fonts/Khula-Regular.ttf'),
		KhulaSemibold: require('./assets/fonts/Khula-SemiBold.ttf')
	});
};

export default function App() {
	const [ fontsLoaded, setFontsLoaded ] = useState(false);

	if (!fontsLoaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />;
	}

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName="Loading"
						screenOptions={{
							headerShown: false
						}}
					>
						<Stack.Screen name="Loading" component={LoadingScreen} />
						<Stack.Screen name="Dashboard" component={DashboardScreen} />
						<Stack.Screen name="Onboarding" component={OnboardingScreen} />
						<Stack.Screen name="DailyReport" component={DailyReportScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
}
