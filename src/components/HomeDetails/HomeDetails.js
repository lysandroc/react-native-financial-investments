import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchInvestmentRecord } from '../../redux/actions/financialInvestmentsActions';
import { Card } from './styled';
import EarningHeader from '../common/EarningHeader';
import Chart from '../common/Chart';
import ChartFinancialInvestments from '../common/ChartFinancialInvestments';
import ChartFinancialInvestmentsFilter from '../common/ChartFinancialInvestmentsFilter';

import { sortByDate } from '../../utils/commons';

const HomeDetails = ({ fetchInvestment, records }) => {
	const [amountInvested, setAmountInvested] = useState();
	const [label, setLabel] = useState();

	useEffect(() => {
		if (!records || Object.keys(records).length === 0) {
			fetchInvestment();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fetchInvestment]);

	useEffect(() => {
		const lastRecord = sortByDate(Object.values(records), 'day').pop();
		if (lastRecord) setAmountInvested(lastRecord.yieldValue);
	}, [records]);

	return (
		<Card elevation={5}>
			<EarningHeader amountInvested={amountInvested} />
			<Chart label={label}>
				<ChartFinancialInvestments data={Object.values(records)} />
				<ChartFinancialInvestmentsFilter setLabel={setLabel} />
			</Chart>
		</Card>
	);
};

const recordSelector = createSelector(
	store => {
		const { records, recordsFiltered } = store.financialInvestments;
		return { records, recordsFiltered };
	},
	({ records, recordsFiltered }) => {
		return recordsFiltered || records;
	}
);

const mapStateToProps = state => {
	return {
		records: recordSelector(state),
	};
};

const mapDispatchToProps = {
	fetchInvestment: fetchInvestmentRecord,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetails);
