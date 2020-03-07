import axios from 'axios';
import moment from 'moment';
import { financialInvestmentsURL } from '../utils/Urls';

export const getFinancialInvestments = async () => {
	const { data } = await axios.get(financialInvestmentsURL);
	const formattedData = data.map(([day, yieldValue]) => ({ day: moment(day, 'MM/YYYY'), yieldValue }));
	return formattedData;
};
