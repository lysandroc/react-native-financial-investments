import React, { useState } from 'react';
import { VictoryChart, VictoryTheme } from 'victory-native';
import { WrapperView, Title } from './styled';
import ChartFinancialInvestmentsFilter from '../ChartFinancialInvestmentsFilter';

const Chart = ({ children }) => {
	const [label, setLabel] = useState();

	return (
		<WrapperView>
			<Title dark center>
				{label}
			</Title>
			{children}
			<ChartFinancialInvestmentsFilter setLabel={setLabel} />
		</WrapperView>
	);
};

export default Chart;
