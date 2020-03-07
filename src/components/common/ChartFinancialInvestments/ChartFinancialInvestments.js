import React from 'react';
import moment from 'moment';
import { VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel, VictoryArea } from 'victory-native';

const ChartFinancialInvestments = ({ data = [] }) => {
	return (
		<VictoryChart style={{ parent: { maxWidth: '100%' } }} theme={VictoryTheme.material}>
			<VictoryAxis
				dependentAxis
				standalone={false}
				fixLabelOverlap
				tickFormat={money => `${parseInt(money / 1000, 10)}K`}
			/>
			<VictoryAxis standalone={false} fixLabelOverlap tickFormat={date => moment(date, 'DD/MM/YYYY').format('MM/YYYY')} />
			<VictoryArea
				style={{
					data: { fill: '#48BCDF', fillOpacity: 0.7, stroke: 'gray', strokeWidth: 1 },
				}}
				labelComponent={<VictoryLabel dy={15} dx={15} />}
				labels={({ datum, data: { length }, index }) => {
					const isFirstDay = moment(datum.day, 'DD/MM/YYYY').format('DD');
					return isFirstDay === '01' ? `${parseInt(datum.yieldValue / 1000, 10)}K` : '';
				}}
				data={data}
				x="day"
				y="yieldValue"
				animate={{
					duration: 1000,
				}}
			/>
		</VictoryChart>
	);
};

export default ChartFinancialInvestments;
