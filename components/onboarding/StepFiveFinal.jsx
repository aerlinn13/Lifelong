import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { OnboardingHeader, Paragraph, ChangeStepButton } from './layout';
import texts from './texts';

const Wrapper = styled.View`
	height: ${() => `${Dimensions.get('window').height}px`};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;

const StepFiveFinal = ({ finishOnboarding }) => (
	<Wrapper>
		<OnboardingHeader>And that's it.</OnboardingHeader>
		{texts.stepFive.map((text, i) => <Paragraph key={'paragraph' + i}>{text}</Paragraph>)}
		<ChangeStepButton label="Open Dashboard" onPress={finishOnboarding} wide />
	</Wrapper>
);

export default StepFiveFinal;
