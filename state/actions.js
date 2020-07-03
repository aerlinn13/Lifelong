import * as actionTypes from './actionTypes';

export const finishOnboarding = () => ({
	type: actionTypes.FINISH_ONBOARDING
});

export const respawnOnboarding = () => ({
	type: actionTypes.RESPAWN_ONBOARDING
});

export const updateWeight = (newWeight) => ({
	type: actionTypes.UPDATE_WEIGHT,
	newWeight
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

export const addLifespanModifier = (direction, id, minutes) => ({
	type: actionTypes.ADD_LIFESPAN_MODIFIER,
	direction,
	id,
	minutes
});

export const removeAllUserModifiers = () => ({
	type: actionTypes.REMOVE_ALL_USER_MODIFIERS
});
