import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { reactotronRedux } from 'reactotron-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { StatusBar } from 'expo-status-bar';
import * as firebase from 'firebase';
import 'firebase/firestore';

import { PersistGate } from 'redux-persist/integration/react';

import DashboardScreen from './screens/DashboardScreen';
import OnboardingScreen from './screens/OnboardingScreen';

import initialState from './state/model';
import reducer from './state/reducer';

const firebaseConfig = {
	apiKey: 'AIzaSyDwRPeRthxLqh0qHDqmTpgDrEXtFkRs3Qw',
	authDomain: 'lifelong13.firebaseapp.com',
	databaseURL: 'https://lifelong13.firebaseio.com',
	projectId: 'lifelong13',
	storageBucket: 'lifelong13.appspot.com',
	messagingSenderId: '773268323528',
	appId: '1:773268323528:web:e54a912083a1805e8639fd',
	measurementId: 'G-7RTZG1642M'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const Stack = createStackNavigator();

const persistConfig = {
	key: 'root',
	storage: AsyncStorage
};

let store;
if (__DEV__) {
	const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
		.configure()
		.useReactNative()
		.use(reactotronRedux())
		.connect();
	store = createStore(persistReducer(persistConfig, reducer), initialState, reactotron.createEnhancer());
} else {
	store = createStore(persistReducer(persistConfig, reducer), initialState);
}

const persistor = persistStore(store);

const fetchFonts = () => {
	return Font.loadAsync({
		KhulaBold: require('./assets/fonts/Khula-Bold.ttf'),
		KhulaLight: require('./assets/fonts/Khula-Light.ttf'),
		KhulaRegular: require('./assets/fonts/Khula-Regular.ttf'),
		KhulaSemiBold: require('./assets/fonts/Khula-SemiBold.ttf')
	});
};

export default function App() {
	const [ fontsLoaded, setFontsLoaded ] = useState(false);

	if (!fontsLoaded) {
		return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />;
	}

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SafeAreaProvider>
					<NavigationContainer>
						<Stack.Navigator
							initialRouteName="Dashboard"
							screenOptions={{
								headerShown: false,
								cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
								transitionSpec: {
									open: { animation: 'timing', config: { duration: 0 } },
									close: { animation: 'timing', config: { duration: 0 } }
								}
							}}
						>
							<Stack.Screen name="Dashboard" component={DashboardScreen} />
							<Stack.Screen
								name="Onboarding"
								component={OnboardingScreen}
								options={{
									transitionSpec: {
										open: { animation: 'timing', config: { duration: 0 } },
										close: TransitionPresets.ModalTransition
									}
								}}
							/>
						</Stack.Navigator>
						<StatusBar style="dark" />
					</NavigationContainer>
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	);
}
