import { Map } from 'immutable';

const initialState = Map({
    reports: [],
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    ttl: 0,
    weight: 0,
    height: 0,
    relatives: {},
    strikes: {},
});

export default initialState;