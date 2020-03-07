import axios from 'axios';
import { toHashMap } from '../utils/mutations';

import { financialInvestmentsURL } from '../utils/Urls';

export const getFinancialInvestments = async () => {
	const { data } = await axios.get(financialInvestmentsURL);
	return toHashMap(data);
};
