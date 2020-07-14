import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { OnboardingHeader, Paragraph, ChangeStepButton } from './layout';
import texts from './texts';

const Wrapper = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	height: 100%;
`;

const Texts = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
`;

const StepOneIntro = ({ step, setStep }) => (
	<Wrapper>
		<OnboardingHeader>It is all about time.</OnboardingHeader>
		<Texts>{texts['intro'].map((text, i) => <Paragraph key={'paragraph' + i}>{text}</Paragraph>)}</Texts>
		<ChangeStepButton label="Start" onPress={() => setStep(step + 1)} />
	</Wrapper>
);

export default StepOneIntro;
