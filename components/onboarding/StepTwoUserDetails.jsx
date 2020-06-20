import React, { useState } from 'react';
import { OnboardingHeader, Textfield, Radio, ConfirmButton } from './layout';

const options = [
	{
		label: 'Male',
		value: 'm'
	},
	{
		label: 'Female',
		value: 'f'
	}
];

const StepTwoUserDetails = ({ step, setStep, updatePersonalInfo }) => {
	const [ internalStep, setInternalStep ] = useState(0);

	const renderStep = () => {
		switch (internalStep) {
			case 0:
				return (
					<Textfield
						key={`textfield-${step}-${internalStep}`}
						label={'Weight, kg'}
						role={'weight'}
						type="numeric"
						onChange={(text) => updatePersonalInfo('weight', text)}
					/>
				);
			case 1:
				return (
					<Textfield
						key={`textfield-${step}-${internalStep}`}
						label={'Height, cm'}
						role={'height'}
						type="numeric"
						onChange={(text) => updatePersonalInfo('height', text)}
					/>
				);
			case 2:
				return (
					<Textfield
						key={`textfield-${step}-${internalStep}`}
						label={'Date of birth, dd.mm.yyyy'}
						role={'dob'}
						onChange={(text) => updatePersonalInfo('dob', text)}
					/>
				);
			case 3:
				return (
					<Radio
						key={`radio-${step}-${internalStep}`}
						options={options}
						label="Gender"
						role="gender"
						onPress={(selection) => updatePersonalInfo('gender', selection)}
					/>
				);
		}
	};

	const handlePress = () => {
		if (internalStep === 3) {
			setStep(step + 1);
		} else {
			setInternalStep(internalStep + 1);
		}
	};

	return (
		<React.Fragment>
			<OnboardingHeader>{`About you (${internalStep + 1} out of 4)`}</OnboardingHeader>
			{renderStep()}
			<ConfirmButton onPress={handlePress} label="Confirm" />
		</React.Fragment>
	);
};

export default StepTwoUserDetails;
