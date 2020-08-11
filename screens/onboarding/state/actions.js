import * as actionTypes from './actionTypes';

export const finishOnboarding = () => ({
	type: actionTypes.FINISH_ONBOARDING
});

export const respawnOnboarding = () => ({
	type: actionTypes.RESPAWN_ONBOARDING
});

export const updatePersonalInfo = (info, value) => ({
	type: actionTypes.UPDATE_PERSONAL_INFO,
	info,
	value
});

export const updateRelativeInfo = (relative, info, value) => ({
	type: actionTypes.UPDATE_RELATIVE_INFO,
	relative,
	info,
	value
});
