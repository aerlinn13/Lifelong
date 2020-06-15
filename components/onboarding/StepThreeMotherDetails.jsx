import React from 'react';
import styled from 'styled-components/native';
import { OnboardingHeader, RelativeProfile } from './layout';

const StepThreeMotherDetails = () => (
	<React.Fragment>
		<OnboardingHeader>About your mother</OnboardingHeader>
		<RelativeProfile label="Her age" />
		<RelativeProfile label="Her father's age" />
		<RelativeProfile label="Her mother's age" />
	</React.Fragment>
);

export default StepThreeMotherDetails;
