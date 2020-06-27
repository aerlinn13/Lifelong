import React, { useState } from 'react';
import { OnboardingHeader, RelativeProfile, ConfirmButton } from './layout';

const StepFourFatherDetails = ({ step, setStep, updateRelativeInfo }) => {
	const [ internalStep, setInternalStep ] = useState(0);

	const renderStep = () => {
		switch (internalStep) {
			case 0:
				return (
					<RelativeProfile
						key={`relative-${step}-${internalStep}`}
						label="His age"
						relative="father"
						updateRelativeInfo={updateRelativeInfo}
					/>
				);
			case 1:
				return (
					<RelativeProfile
						key={`relative-${step}-${internalStep}`}
						relative="paternalGrandfather"
						label="His father's age"
						updateRelativeInfo={updateRelativeInfo}
					/>
				);
			case 2:
				return (
					<RelativeProfile
						key={`relative-${step}-${internalStep}`}
						relative="paternalGrandmother"
						label="His mother's age"
						updateRelativeInfo={updateRelativeInfo}
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
			<OnboardingHeader>{`About father (${internalStep + 1} out of 3)`}</OnboardingHeader>
			{renderStep()}
			<ConfirmButton onPress={handlePress} label="Confirm" />
		</React.Fragment>
	);
};

export default StepFourFatherDetails;
