import * as actionTypes from '../../actions/actionTypes';

const initialState = {
	signed: true,
	user: {
		name: 'Lysandro Carioca',
	},
};

const setUser = (state, action) => {
	const { user = { name: 'lysandro' } } = action.data;
	return { ...state, user };
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_SIGN_IN:
			return setUser(state, action);
		default:
			break;
	}
	return state;
};

export default reducer;
