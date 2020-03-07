import React, { useState } from 'react';
import { VictoryChart, VictoryTheme } from 'victory-native';
import { WrapperView, Title } from './styled';
import ChartFilter from '../ChartFilter';

const Chart = ({ children }) => {
	const [label, setLabel] = useState();

	return (
		<WrapperView>
			<Title dark center>
				{label}
			</Title>
			{children}
			<ChartFilter setLabel={setLabel} />
		</WrapperView>
	);
};

export default Chart;
