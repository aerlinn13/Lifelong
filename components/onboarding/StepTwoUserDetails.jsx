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

const StepTwoUserDetails = ({ step, setStep }) => {
	const [ internalStep, setInternalStep ] = useState(0);
	const [ weight, setWeight ] = useState(null);
	const [ height, setHeight ] = useState(null);
	const [ dob, setDOB ] = useState(null);
	const [ gender, setGender ] = useState(null);

	const renderStep = () => {
		switch (internalStep) {
			case 0:
				return (
					<Textfield
						key={`textfield-${step}-${internalStep}`}
						label={'Weight, kg'}
						role={'weight'}
						type="numeric"
						onChange={setWeight}
					/>
				);
			case 1:
				return (
					<Textfield
						key={`textfield-${step}-${internalStep}`}
						label={'Height, cm'}
						role={'height'}
						type="numeric"
						onChange={setHeight}
					/>
				);
			case 2:
				return (
					<Textfield
						key={`textfield-${step}-${internalStep}`}
						label={'Date of birth, dd.mm.yyyy'}
						role={'dob'}
						onChange={setDOB}
					/>
				);
			case 3:
				return (
					<Radio
						key={`radio-${step}-${internalStep}`}
						options={options}
						label="Gender"
						selectedValue={gender}
						onPress={setGender}
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
