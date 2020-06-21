const timeToLiveCalculator = (state) => {
	let ttl = 0;

	// personal data
	const dob = state.get('dob');
	const weight = parseInt(state.get('weight'), 10);
	const height = parseInt(state.get('height'), 10);
	const gender = state.get('gender');

	const bmi = (weight / (height * height)).toFixed(1);

	return 1000;
};

export default timeToLiveCalculator;
