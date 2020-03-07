import produce from 'immer';
import * as actionTypes from '../../actions/actionTypes';

const INITIAL_STATE = {
	records: [],
	recordsFiltered: [],
};

const setFetchMode = (draft, action) => {
	draft.loading = true;
	return draft;
};

const setFailureMode = (draft, action) => {
	draft.loading = false;
	return draft;
};

const setRecords = (draft, action) => {
	draft.records = action.payload;
	draft.recordsFiltered = action.payload;
	return draft;
};

const setFilter = (draft, action) => {
	draft.recordsFiltered = action.payload;
	return draft;
};

const reducer = (state = INITIAL_STATE, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case actionTypes.FETCH_INVESTMENT_RECORD:
				return setFetchMode(draft, action);
			case actionTypes.SET_FAILURE:
				return setFailureMode(draft, action);
			case actionTypes.SET_INVESTMENT_RECORD:
				return setRecords(draft, action);
			case actionTypes.SET_FILTER_INVESTMENT_RECORD:
				return setFilter(draft, action);
			default:
				return state;
		}
	});
};

export default reducer;
