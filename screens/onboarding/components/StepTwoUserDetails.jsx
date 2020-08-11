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
	const [ validation, setValidation ] = useState(Array(4).fill(''));

	const handleChange = (field, text) => {
		updatePersonalInfo(field, text);
		const newValidation = [ ...validation ];
		newValidation[internalStep] = text;
		setValidation(newValidation);
	};

	const renderStep = () => {
		switch (internalStep) {
			case 0:
				return (
					<Textfield
						key={`textfield-${step}-${internalStep}`}
						label={'Weight, kg'}
						role={'weight'}
						type="number-pad"
						onChange={(text) => handleChange('weight', text)}
					/>
				);
			case 1:
				return (
					<Textfield
						key={`textfield-${step}-${internalStep}`}
						label={'Height, cm'}
						role={'height'}
						type="number-pad"
						onChange={(text) => handleChange('height', text)}
					/>
				);
			case 2:
				return (
					<Textfield
						key={`textfield-${step}-${internalStep}`}
						label={'Date of birth (DD.MM.YYYY)'}
						role={'dob'}
						type="default"
						value={validation[internalStep]}
						onChange={(text) => handleChange('dob', text)}
					/>
				);
			case 3:
				return (
					<Radio
						key={`radio-${step}-${internalStep}`}
						options={options}
						label="Gender"
						role="gender"
						onPress={(selection) => handleChange('gender', selection)}
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
			<OnboardingHeader>{`About your avatar (${internalStep + 1} out of 4)`}</OnboardingHeader>
			{renderStep()}
			<ConfirmButton onPress={handlePress} label="Confirm" disabled={!validation[internalStep].length} />
		</React.Fragment>
	);
};

export default StepTwoUserDetails;
