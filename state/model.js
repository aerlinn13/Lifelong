import { Map } from 'immutable';

const initialState = new Map({
	reports: [],
	firstName: '',
	lastName: '',
	dob: '',
	gender: '',
	ttl: '0',
	weight: '0',
	height: '0',
	onboardingFinished: false,
	relatives: Map({
		mother: Map({}),
		maternalGrandmother: Map({}),
		maternalGrandfather: Map({}),
		father: Map({}),
		paternalGrandmother: Map({}),
		paternalGrandfather: Map({})
	}),
	strikes: {}
});

export default initialState;
