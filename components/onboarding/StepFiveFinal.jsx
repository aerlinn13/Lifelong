import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { OnboardingHeader, Paragraph, ChangeStepButton } from './layout';
import texts from './texts';

const Wrapper = styled.View`
	height: ${(props) => `${Dimensions.get('window').height}px`};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StepFiveFinal = ({ finishOnboarding }) => (
	<Wrapper>
		<OnboardingHeader>Our goals</OnboardingHeader>
		{texts.stepFive.map((text, i) => <Paragraph key={'paragraph' + i}>{text}</Paragraph>)}
		<ChangeStepButton label="Complete" onPress={finishOnboarding} />
	</Wrapper>
);

export default StepFiveFinal;
