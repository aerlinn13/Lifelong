import React, { useState } from 'react';
import { OnboardingHeader, Textfield, Radio } from './layout';

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
	const [ weight, setWeight ] = useState(null);
	const [ height, setHeight ] = useState(null);
	const [ dob, setDOB ] = useState(null);
	const [ gender, setGender ] = useState(null);
	console.log(weight, height, dob, gender);
	return (
		<React.Fragment>
			<OnboardingHeader>About you</OnboardingHeader>
			<Textfield label={'Weight, kg'} type={'weight'} onChange={setWeight} />
			<Textfield label={'Height, cm'} type={'height'} onChange={setHeight} />
			<Textfield label={'Date of birth, dd.mm.yyyy'} type={'dob'} onChange={setDOB} />
			<Radio options={options} label="Gender" selectedValue={gender} onPress={setGender} />
		</React.Fragment>
	);
};

export default StepTwoUserDetails;
