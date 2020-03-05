import produce from 'immer';
import * as actionTypes from '../../actions/actionTypes';

const INITIAL_STATE = {
	investmentRecords: [],
};

const setFetchMode = (draft, action) => {
	draft.loading = true;
	return draft;
};

const setFailureMode = (draft, action) => {
	draft.loading = false;
	return draft;
};

const setInvestmentRecords = (draft, action) => {
	draft.investmentRecords = action.payload;
	return draft;
};

const reducer = (state = INITIAL_STATE, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case actionTypes.FETCH_INVESTMENT_RECORD:
				return setFetchMode();
			case actionTypes.SET_FAILURE_INVESTMENT_RECORD:
				return setFailureMode();
			case actionTypes.SET_INVESTMENT_RECORD:
				return setInvestmentRecords(draft, action);
			default:
				break;
		}
		return state;
	});
};

export default reducer;
