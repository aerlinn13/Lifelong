import initialState from './model';
import * as actionTypes from './actionTypes';

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FINISH_ONBOARDING:
			return state.set('onboardingFinished', true);
		case actionTypes.SAVE_PERSONAL_INFO:
			console.log(action);
			return state.set(action.info, action.value);
		case actionTypes.SAVE_RELATIVE_INFO:
			return state.setIn([ 'relatives', action.relative, action.info ], action.value);
		case actionTypes.SAVE_DAILY_REPORT:
			return state.setIn([ 'reports', action.date ], action.report);
		default:
			return state;
	}
}

export default reducer;
