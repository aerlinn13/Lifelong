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

const StepTwoUserDetails = () => {
	const [ step, setStep ] = useState(0);
	const [ weight, setWeight ] = useState(null);
	const [ height, setHeight ] = useState(null);
	const [ dob, setDOB ] = useState(null);
	const [ gender, setGender ] = useState(null);

	const renderStep = () => {
		switch (step) {
			case 0:
				return <Textfield label={'Weight, kg'} type={'weight'} onChange={setWeight} />;
			case 1:
				return <Textfield label={'Height, cm'} type={'height'} onChange={setHeight} />;
			case 2:
				return <Textfield label={'Date of birth, dd.mm.yyyy'} type={'dob'} onChange={setDOB} />;
			case 3:
				return <Radio options={options} label="Gender" selectedValue={gender} onPress={setGender} />;
		}
	};

	const handlePress = () => {
		if (step === 3) {
			console.log('hey');
		} else {
			setStep(step + 1);
		}
	};
	return (
		<React.Fragment>
			<OnboardingHeader>{`About you (${step + 1} out of 4)`}</OnboardingHeader>
			{renderStep()}
			<ConfirmButton onPress={handlePress} label="Confirm" />
		</React.Fragment>
	);
};

export default StepTwoUserDetails;
