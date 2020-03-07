import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from './styled';
import EarningHeader from '../common/EarningHeader';
import Chart from '../common/Chart';
import { fetchInvestmentRecord } from '../../redux/actions/financialInvestmentsActions';

const HomeDetails = () => {
	const dispatch = useDispatch();
	const records = useSelector(state => state.financialInvestments.records);

	useEffect(() => {
		dispatch(fetchInvestmentRecord());
	}, [dispatch, records]);

	return (
		<Card elevation={5}>
			<EarningHeader />
			<Chart data={records} />
		</Card>
	);
};

export default HomeDetails;
