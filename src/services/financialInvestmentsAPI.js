import axios from 'axios';
import { financialInvestmentsURL } from '../utils/Urls';

export const getFinancialInvestments = async () => {
	const { data } = await axios.get(financialInvestmentsURL);
	const formattedData = data.map(([day, yieldValue]) => ({ day, yieldValue }));
	return formattedData;
};
