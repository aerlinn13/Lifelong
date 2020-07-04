import initialState from './model';
import * as actionTypes from './actionTypes';
import geneticCalculator from '../calculators/geneticCalculator';
import negativeBMICalculator, { bmiRate } from '../calculators/bmiCalculator';
import data from '../data/lifespanModifiers';

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FINISH_ONBOARDING:
			return {
				...state,
				onboardingFinished: true,
				geneticAgeAtDeath: geneticCalculator(state),
				negativeBMIInfluence: negativeBMICalculator(state),
				bmi: bmiRate(state)
			};
		case actionTypes.RESPAWN_ONBOARDING:
			return {
				...state,
				onboardingFinished: false
			};
		case actionTypes.UPDATE_PERSONAL_INFO:
			return {
				...state,
				[action.info]: action.value
			};
		case actionTypes.UPDATE_RELATIVE_INFO:
			return {
				...state,
				[action.relative]: action.info
			};
		case actionTypes.UPDATE_WEIGHT:
			return {
				...state,
				weight: action.newWeight,
				bmi: bmiRate({ weight: action.newWeight, height: state.height }),
				negativeBMIInfluence: negativeBMICalculator({
					gender: state.gender,
					height: state.height,
					weight: action.newWeight
				})
			};
		case actionTypes.ADD_LIFESPAN_MODIFIER:
			return {
				...state,
				[action.direction]: state[action.direction] + action.minutes,
				lifespanModifiers: [ ...state.lifespanModifiers, action.id ]
			};
		case actionTypes.REMOVE_ALL_USER_MODIFIERS:
			return {
				...state,
				lifespanModifiers: [],
				timeWon: 0,
				timeLost: 0
			};
		case actionTypes.REMOVE_LAST_MODIFIER:
			if (!state.lifespanModifiers.length) {
				return state;
			}

			const lifespanModifiers = [ ...state.lifespanModifiers ];
			const lastModifierId = lifespanModifiers.pop();
			const lastModifierObj = data[lastModifierId];
			const timeToUpdate = lastModifierObj.type === '+' ? 'timeWon' : 'timeLost';
			return {
				...state,
				lifespanModifiers,
				[timeToUpdate]: state[timeToUpdate] - lastModifierObj.minutes
			};
		default:
			return state;
	}
}

export default reducer;
