import { takeLatest, call, put, all } from 'redux-saga/effects';
import { FETCH_INVESTMENT_RECORD } from '../../actions/actionTypes';
import { setInvestmentRecord, setFailure } from '../../actions/financialInvestmentsActions';
import { getFinancialInvestments } from '../../../services/financialInvestmentsAPI';

function* fetchInvestmentRecord(action) {
	try {
		const payload = yield call(getFinancialInvestments());
		yield put(setInvestmentRecord(payload));
	} catch (error) {
		yield put(setFailure(error));
	}
}

export default all([takeLatest(FETCH_INVESTMENT_RECORD, fetchInvestmentRecord)]);
