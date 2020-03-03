import { all } from 'redux-saga/effects';

import financialInvestmentsSagas from './financialInvestments/financialInvestmentsSaga';

export default function* rootSaga() {
	return yield all([financialInvestmentsSagas]);
}
