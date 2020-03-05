import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './styled';
import EarningHeader from '../common/EarningHeader';
import Chart from '../common/Chart';
import { fetchInvestmentRecord } from '../../redux/actions/financialInvestmentsActions';

const HomeDetails = () => {
	const dispatch = useDispatch();
	const investmentRecords = useSelector(state => state.financialInvestments.investmentRecords);

	useEffect(() => {
		dispatch(fetchInvestmentRecord());
	}, [dispatch]);

	useEffect(() => {}, [investmentRecords]);

	return (
		<Card elevation={5}>
			<EarningHeader />
			<Chart data={investmentRecords} />
		</Card>
	);
};

export default HomeDetails;
