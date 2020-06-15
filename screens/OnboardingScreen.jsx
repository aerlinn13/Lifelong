import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { finishOnboarding } from '../state/actions';
import {
	StepOneIntro,
	StepTwoUserDetails,
	StepThreeMotherDetails,
	StepFourFatherDetails,
	StepFiveFinal
} from '../components/onboarding';

const Button = styled.TouchableOpacity`
	background-color: #99d355;
	color: white;
	width: 60px;
	height: 30px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	top: 20px;
	right: 20px;
	border-radius: 10px;
`;

const ButtonText = styled.Text`
	color: white;
	font-family: LoraBold;
	font-size: 18px;
	text-align: center;
`;

const OnboardingScreen = ({ navigation, finishOnboarding }) => {
	const [ step, changeStep ] = useState(0);

	const renderSteps = () => {
		console.log(step);
		switch (step) {
			case 0:
				return <StepOneIntro />;
			case 1:
				return <StepTwoUserDetails />;
			case 2:
				return <StepThreeMotherDetails />;
			case 3:
				return <StepFourFatherDetails />;
			case 4:
				return <StepFiveFinal />;
			default:
				return null;
		}
	};

	const renderButtonText = () => {
		if (step === 4) {
			return 'Done';
		} else {
			return 'Next';
		}
	};

	const handlePress = () => {
		if (step === 4) {
			finishOnboarding();
			navigation.navigate('Dashboard');
		} else {
			changeStep(step + 1);
		}
	};

	return (
		<SafeAreaView>
			<KeyboardAvoidingView>
				<Button onPress={() => handlePress()}>
					<ButtonText>{renderButtonText()}</ButtonText>
				</Button>
				{renderSteps()}
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const mapDispatchToProps = (dispatch) => ({
	finishOnboarding: () => dispatch(finishOnboarding())
});

const OnboardingScreenContainer = connect(null, mapDispatchToProps)(OnboardingScreen);

export default OnboardingScreenContainer;
