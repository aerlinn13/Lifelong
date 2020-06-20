import React from 'react';
import styled from 'styled-components/native';
import { OnboardingHeader, Paragraph, ChangeStepButton } from './layout';
import texts from './texts';

const StepFiveFinal = ({ finishOnboarding }) => (
	<React.Fragment>
		<OnboardingHeader>Our goals</OnboardingHeader>
		<ChangeStepButton label="Complete" onPress={finishOnboarding} wide />
		{texts.stepFive.map((text, i) => <Paragraph key={'paragraph' + i}>{text}</Paragraph>)}
	</React.Fragment>
);

export default StepFiveFinal;
