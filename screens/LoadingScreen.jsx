import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

const StyledView = styled.View`
	width: 100%;
	height: 100%;
	background-color: white;
`;

const LoadingScreen = ({ navigation, onboardingFinished }) => {
	useEffect(() => {
		if (onboardingFinished) {
			navigation.replace('Dashboard');
		} else {
			navigation.replace('Onboarding');
		}
	}, []);

	return (
		<SafeAreaView>
			<StyledView />
		</SafeAreaView>
	);
};

const mapStateToProps = (state) => ({
	onboardingFinished: state.onboardingFinished
});

const LoadingScreenContainer = connect(mapStateToProps)(LoadingScreen);

export default LoadingScreenContainer;
