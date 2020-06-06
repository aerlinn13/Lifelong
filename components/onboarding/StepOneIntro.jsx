import React from 'react';

import { OnboardingHeader, Paragraph } from './layout';
import texts from './texts';

const StepOneIntro = () => (
	<React.Fragment>
		<OnboardingHeader>Welcome to Lifelong</OnboardingHeader>
		{texts['intro'].map((text) => <Paragraph>{text}</Paragraph>)}
	</React.Fragment>
);

export default StepOneIntro;
