import initialState from './model';
import * as dashboardActionTypes from '../screens/dashboard/state/actionTypes';
import * as onboardingActionTypes from '../screens/onboarding/state/actionTypes';
import geneticCalculator from '../calculators/geneticCalculator';
import negativeBMICalculator, { bmiRate } from '../calculators/bmiCalculator';

function reducer(state = initialState, action) {
	switch (action.type) {
		case onboardingActionTypes.FINISH_ONBOARDING:
			return {
				...state,
				onboardingFinished: true,
				geneticAgeAtDeath: geneticCalculator(state),
				negativeBMIInfluence: negativeBMICalculator(state),
				bmi: bmiRate(state)
			};
		case onboardingActionTypes.RESPAWN_ONBOARDING:
			return {
				...state,
				onboardingFinished: false
			};
		case onboardingActionTypes.UPDATE_PERSONAL_INFO:
			return {
				...state,
				[action.info]: action.value
			};
		case onboardingActionTypes.UPDATE_RELATIVE_INFO:
			return {
				...state,
				[action.relative]: action.info
			};
		case dashboardActionTypes.UPDATE_WEIGHT:
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
		case dashboardActionTypes.ADD_LIFESPAN_MODIFIER:
			return {
				...state,
				[action.direction]: state[action.direction] + action.minutes,
				lifespanModifiers: [ ...state.lifespanModifiers, action.id ]
			};
		case dashboardActionTypes.REMOVE_ALL_USER_MODIFIERS:
			return {
				...state,
				lifespanModifiers: [],
				timeWon: 0,
				timeLost: 0
			};
		case dashboardActionTypes.REMOVE_LAST_MODIFIER:
			if (!state.lifespanModifiers.length) {
				return state;
			}

			const lifespanModifiers = [ ...state.lifespanModifiers ];
			const lastModifierId = lifespanModifiers.pop();
			const lastModifierObj = state.data[lastModifierId];
			const timeToUpdate = lastModifierObj.type === '+' ? 'timeWon' : 'timeLost';
			return {
				...state,
				lifespanModifiers,
				[timeToUpdate]: state[timeToUpdate] - lastModifierObj.minutes
			};
		case dashboardActionTypes.SET_DATA_VERSION:
			return {
				...state,
				version: action.version,
				notes: action.nodes
			};
		case dashboardActionTypes.DOWNLOAD_DATA:
			return {
				...state,
				data: action.data
			};
		case dashboardActionTypes.SET_WHATS_NEW:
			return {
				...state,
				newData: action.data,
				showWhatsNew: true
			};
		case dashboardActionTypes.DISMISS_WHATS_NEW:
			return {
				...state,
				newData: [],
				showWhatsNew: false
			};
		default:
			return state;
	}
}

export default reducer;
