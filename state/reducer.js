import initialState from './model';
import * as actionTypes from './actioTypes';

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FINISH_ONBOARDING:
            return state.set('onboardingFinished', true);
        case actionTypes.SAVE_PROFILE_DETAILS:
            return state.set(action.detailType, action.payload);
        case actionTypes.SAVE_DAILY_REPORT:
            return state.setIn(['reports', action.date], action.report);
        default: return state;
    }
}

export default reducer;