import React, { useState } from 'react';
import { VictoryChart, VictoryTheme } from 'victory-native';
import { WrapperView, Title } from './styled';
import ChartFilter from '../ChartFilter';
import ChartFinancialInvestments from '../ChartFinancialInvestments';

const Chart = ({ data = [] }) => {
	const [label, setLabel] = useState();

	return (
		<WrapperView>
			<Title dark center>
				{label}
			</Title>

			<ChartFinancialInvestments data={data} />

			<ChartFilter setLabel={setLabel} />
		</WrapperView>
	);
};

export default Chart;
