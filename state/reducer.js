import initialState from './model';
import * as actionTypes from './actionTypes';
import timeToLiveCalculator from '../calculators/ttl-calculator';

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FINISH_ONBOARDING:
			return state.merge({ onboardingFinished: true, ttl: timeToLiveCalculator(state) });
		case actionTypes.UPDATE_PERSONAL_INFO:
			return state.set(action.info, action.value);
		case actionTypes.UPDATE_RELATIVE_INFO:
			return state.setIn([ 'relatives', action.relative, action.info ], action.value);
		case actionTypes.SAVE_DAILY_REPORT:
			return state.setIn([ 'reports', action.date ], action.report);
		default:
			return state;
	}
}

export default reducer;
