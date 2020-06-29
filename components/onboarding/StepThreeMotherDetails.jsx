import React, { useState } from 'react';
import { OnboardingHeader, RelativeProfile, ConfirmButton } from './layout';

const StepThreeMotherDetails = ({ step, setStep, updateRelativeInfo }) => {
	const [ internalStep, setInternalStep ] = useState(0);
	const [ validation, setValidation ] = useState(Array(3).fill(''));

	const handleChange = (relative, field, text) => {
		updateRelativeInfo(relative, field, text);
		const newValidation = [ ...validation ];
		newValidation[internalStep] = text;
		setValidation(newValidation);
	};

	const renderStep = () => {
		switch (internalStep) {
			case 0:
				return (
					<RelativeProfile
						key={`relative-${step}-${internalStep}`}
						label="Her age"
						relative="mother"
						updateRelativeInfo={handleChange}
					/>
				);
			case 1:
				return (
					<RelativeProfile
						key={`relative-${step}-${internalStep}`}
						relative="maternalGrandfather"
						label="Her father's age"
						updateRelativeInfo={handleChange}
					/>
				);
			case 2:
				return (
					<RelativeProfile
						key={`relative-${step}-${internalStep}`}
						relative="maternalGrandmother"
						label="Her mother's age"
						updateRelativeInfo={handleChange}
					/>
				);
		}
	};

	const handlePress = () => {
		if (internalStep === 2) {
			setStep(step + 1);
		} else {
			setInternalStep(internalStep + 1);
		}
	};

	return (
		<React.Fragment>
			<OnboardingHeader>{`About mother (${internalStep + 1} out of 3)`}</OnboardingHeader>
			{renderStep()}
			<ConfirmButton onPress={handlePress} label="Confirm" disabled={!validation[internalStep]} />
		</React.Fragment>
	);
};

export default StepThreeMotherDetails;
