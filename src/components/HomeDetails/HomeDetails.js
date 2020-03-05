import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './styled';
import EarningHeader from '../common/EarningHeader';
import Chart from '../common/Chart';
import { fetchInvestmentRecord } from '../../redux/actions/financialInvestmentsActions';

const HomeDetails = () => {
	const dispatch = useDispatch();
	const { loading, investmentRecords } = useSelector(state => state.financialInvestments);

	useEffect(() => {
		dispatch(fetchInvestmentRecord);
	}, [dispatch]);

	useEffect(() => {
		const a = investmentRecords;
		const b = a;
	}, [investmentRecords]);

	return (
		<Card elevation={5}>
			<EarningHeader />
			<Chart data={investmentRecords} />
		</Card>
	);
};

export default HomeDetails;
