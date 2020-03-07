import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvestmentRecord } from '../../redux/actions/financialInvestmentsActions';
import { Card } from './styled';
import EarningHeader from '../common/EarningHeader';
import Chart from '../common/Chart';

const HomeDetails = () => {
	const dispatch = useDispatch();
	const records = useSelector(state => state.financialInvestments.records);

	// TODO - review this effect, this should be used 'reselect'
	useEffect(() => {
		if (!records || Object.keys(records).length === 0) {
			dispatch(fetchInvestmentRecord());
		}
	}, [dispatch, records]);

	return (
		<Card elevation={5}>
			<EarningHeader amountInvested={600000.0} />
			<Chart data={Object.values(records)} />
		</Card>
	);
};

export default HomeDetails;
