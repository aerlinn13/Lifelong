import React, { useState } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import { finishOnboarding, updatePersonalInfo, updateRelativeInfo } from '../state/actions';
import {
	StepOneIntro,
	StepTwoUserDetails,
	StepThreeMotherDetails,
	StepFourFatherDetails,
	StepFiveFinal
} from '../components/onboarding';

const OnboardingScreen = ({ finishOnboarding, updatePersonalInfo, updateRelativeInfo, weight }) => {
	const [ step, setStep ] = useState(0);
	const renderSteps = () => {
		switch (step) {
			case 0:
				return <StepOneIntro step={step} setStep={setStep} />;
			case 1:
				return <StepTwoUserDetails step={step} setStep={setStep} updatePersonalInfo={updatePersonalInfo} />;
			case 2:
				return <StepThreeMotherDetails step={step} setStep={setStep} updateRelativeInfo={updateRelativeInfo} />;
			case 3:
				return <StepFourFatherDetails step={step} setStep={setStep} updateRelativeInfo={updateRelativeInfo} />;
			case 4:
				return <StepFiveFinal finishOnboarding={finishOnboarding} />;
			default:
				return null;
		}
	};
	console.log(weight);
	return (
		<SafeAreaView>
			<KeyboardAvoidingView>
				<ScrollView bounces={false}>{renderSteps()}</ScrollView>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const mapStateToProps = (state) => ({
	weight: state.get('weight')
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	finishOnboarding: () => {
		dispatch(finishOnboarding());
		ownProps.navigation.navigate('Dashboard');
	},
	updatePersonalInfo: (info, value) => dispatch(updatePersonalInfo(info, value)),
	updateRelativeInfo: (relative, info, value) => dispatch(updateRelativeInfo(relative, info, value))
});

const OnboardingScreenContainer = connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen);

export default OnboardingScreenContainer;
