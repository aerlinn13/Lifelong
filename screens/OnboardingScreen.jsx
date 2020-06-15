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

const OnboardingScreen = ({ navigation, finishOnboarding }) => {
	const [ step, setStep ] = useState(0);
	const renderSteps = () => {
		switch (step) {
			case 0:
				return <StepOneIntro step={step} setStep={setStep} />;
			case 1:
				return <StepTwoUserDetails step={step} setStep={setStep} />;
			case 2:
				return <StepThreeMotherDetails step={step} setStep={setStep} />;
			case 3:
				return <StepFourFatherDetails step={step} setStep={setStep} />;
			case 4:
				return <StepFiveFinal step={step} setStep={setStep} />;
			default:
				return null;
		}
	};

	return (
		<SafeAreaView>
			<KeyboardAvoidingView>
				<ScrollView bounces={false}>{renderSteps()}</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const mapDispatchToProps = (dispatch) => ({
	finishOnboarding: () => dispatch(finishOnboarding())
});

const OnboardingScreenContainer = connect(null, mapDispatchToProps)(OnboardingScreen);

export default OnboardingScreenContainer;
