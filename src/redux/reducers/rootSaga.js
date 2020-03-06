import { all } from 'redux-saga/effects';

import watchFinancialInvestments from './financialInvestments/financialInvestmentsSaga';

export default function* rootSaga() {
	return yield all([watchFinancialInvestments]);
}
