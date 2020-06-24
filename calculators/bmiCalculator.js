const MINUTES_IN_YEAR = 525600;

export const bmiRate = (state) => {
	const weight = parseInt(state.weight, 10);
	const height = parseInt(state.height, 10) / 100;
	return weight / (height * height).toFixed(2);
};

const negativeBMICalculator = (state) => {
	const gender = state.gender;
	const bmi = bmiRate(state);

	if (bmi > 35) {
		switch (gender) {
			case 'm':
				return 8.4 * MINUTES_IN_YEAR;
			case 'f':
				return 5.6 * MINUTES_IN_YEAR;
		}
	}

	if (bmi > 30) {
		switch (gender) {
			case 'm':
				return 5.9 * MINUTES_IN_YEAR;
			case 'f':
				return 5.1 * MINUTES_IN_YEAR;
		}
	}

	if (bmi > 25) {
		switch (gender) {
			case 'm':
				return 4.2 * MINUTES_IN_YEAR;
			case 'f':
				return 3.5 * MINUTES_IN_YEAR;
		}
	}

	if (bmi < 18) {
		switch (gender) {
			case 'm':
				return 4.3 * MINUTES_IN_YEAR;
			case 'f':
				return 4.5 * MINUTES_IN_YEAR;
		}
	}

	return 0;
};

export default negativeBMICalculator;
