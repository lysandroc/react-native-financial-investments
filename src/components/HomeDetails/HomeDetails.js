import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchInvestmentRecord } from '../../redux/actions/financialInvestmentsActions';
import { Card } from './styled';
import EarningHeader from '../common/EarningHeader';
import Chart from '../common/Chart';
import ChartFinancialInvestments from '../common/ChartFinancialInvestments';
import { sortByDate } from '../../utils/commons';

const HomeDetails = ({ fetchInvestment, records }) => {
	const [amountInvested, setAmountInvested] = useState();

	useEffect(() => {
		if (!records || Object.keys(records).length === 0) {
			fetchInvestment();
		}
	}, [fetchInvestment]);

	useEffect(() => {
		const lastRecord = sortByDate(Object.values(records), 'day').pop();
		setAmountInvested(lastRecord.yieldValue);
	}, [records]);

	return (
		<Card elevation={5}>
			<EarningHeader amountInvested={amountInvested} />
			<Chart>
				<ChartFinancialInvestments data={Object.values(records)} />
			</Chart>
		</Card>
	);
};

const recordSelector = createSelector(
	store => {
		const { records } = store.financialInvestments;
		return { records };
	},
	({ records }) => {
		return records;
	}
);

const mapStateToProps = state => ({
	records: recordSelector(state),
});

const mapDispatchToProps = {
	fetchInvestment: fetchInvestmentRecord,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetails);
