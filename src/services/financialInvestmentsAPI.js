import axios from 'axios';
import { financialInvestmentsURL } from '../utils/Urls';

export const getFinancialInvestments = () => {
	return axios.get(financialInvestmentsURL);
};
