import * as actionTypes from './actionTypes';

export const updateWeight = (newWeight) => ({
	type: actionTypes.UPDATE_WEIGHT,
	newWeight
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

export const removeLastModifier = () => ({
	type: actionTypes.REMOVE_LAST_MODIFIER
});

export const setDataVersion = (version, notes) => ({
	type: actionTypes.SET_DATA_VERSION,
	version,
	notes
});

export const downloadData = (data) => ({
	type: actionTypes.DOWNLOAD_DATA,
	data
});

export const setWhatsNew = (data) => ({
	type: actionTypes.SET_WHATS_NEW,
	data
});

export const dismissWhatsNew = () => ({
	type: actionTypes.DISMISS_WHATS_NEW
});
