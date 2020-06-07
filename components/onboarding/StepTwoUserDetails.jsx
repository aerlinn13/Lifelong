import React from 'react';
import styled from 'styled-components/native';
import { OnboardingHeader, Textfield } from './layout';

const StepTwoUserDetails = () => (
	<React.Fragment>
		<OnboardingHeader>About you</OnboardingHeader>
		<Textfield label={'Weight, kg'} />
	</React.Fragment>
);

export default StepTwoUserDetails;
