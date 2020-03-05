import { all } from 'redux-saga/effects';

import financialInvestments from './financialInvestments/financialInvestmentsSaga';

export default function* rootSaga() {
	return yield all([financialInvestments]);
}
