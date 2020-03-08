import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { setRecordsFiltered } from '../../../redux/actions/actionCreators';
import { ViewWrapper, OptionTouchable } from './styled';
import Text from '../Text';
import { sortByDate } from '../../../utils/commons';

const options = [
	{ description: '1M', period: 1, label: 'periodo desde o ultimo mês' },
	{ description: '3M', period: 3, label: 'periodo desde os três últimos meses' },
	{ description: '1A', period: 12, label: 'periodo desde o ultimo ano' },
	{ description: '2A', period: 24, label: 'periodo desde os dois ultimos anos' },
	{ description: 'TODOS', period: 0, label: 'periodo desde do inicio' },
];

const ChartFinancialInvestmentsFilter = ({ setLabel }) => {
	const dispatch = useDispatch();
	const records = useSelector(state => state.financialInvestments.records);
	const [filter, setFilter] = useState(options.find(({ period }) => period === 0));

	useEffect(() => {
		if (filter) {
			setLabel(filter.label);
		}
	}, [filter, setLabel]);

	useEffect(() => {
		if (filter.period !== 0 && Object.keys(records).length >= 0) {
			const recordsFiltered = Object.values(records).filter(({ day }) => {
				const goBackDays = moment().subtract(filter.period, 'months');
				const date = moment(day, 'DD/MM/YYYY');
				return moment(date).isAfter(goBackDays);
			});
			if (recordsFiltered.length === 0) {
				const { yieldValue } = sortByDate(Object.values(records), 'day').pop();
				dispatch(setRecordsFiltered([{ day: moment().format('DD/MM/YYYY'), yieldValue }]));
			} else {
				dispatch(setRecordsFiltered(recordsFiltered));
			}
		} else {
			dispatch(setRecordsFiltered(records));
		}
	}, [dispatch, records, filter, setFilter]);

	return (
		<ViewWrapper>
			{options.map(option => (
				<OptionTouchable
					key={option.period}
					onPress={() => {
						setFilter(option);
					}}
					selected={filter.period === option.period}
				>
					<Text center dark>
						{option.description}
					</Text>
				</OptionTouchable>
			))}
		</ViewWrapper>
	);
};

ChartFinancialInvestmentsFilter.propTypes = {
	setLabel: PropTypes.func,
};

ChartFinancialInvestmentsFilter.defaultProps = {
	setLabel: () => {},
};

export default ChartFinancialInvestmentsFilter;
