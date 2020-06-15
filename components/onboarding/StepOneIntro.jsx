import React from 'react';

import { OnboardingHeader, Paragraph, ChangeStepButton } from './layout';
import texts from './texts';

const StepOneIntro = ({ step, setStep }) => (
	<React.Fragment>
		<OnboardingHeader>Welcome to Lifelong</OnboardingHeader>
		<ChangeStepButton label="Next" onPress={() => setStep(step + 1)} />
		{texts['intro'].map((text, i) => <Paragraph key={'paragraph' + i}>{text}</Paragraph>)}
	</React.Fragment>
);

export default StepOneIntro;
