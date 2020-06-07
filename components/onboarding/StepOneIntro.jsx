import React from 'react';

import { OnboardingHeader, Paragraph } from './layout';
import texts from './texts';

const StepOneIntro = () => (
	<React.Fragment>
		<OnboardingHeader>Welcome to Lifelong</OnboardingHeader>
		{texts['intro'].map((text, i) => <Paragraph key={'paragraph' + i}>{text}</Paragraph>)}
	</React.Fragment>
);

export default StepOneIntro;
