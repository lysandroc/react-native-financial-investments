import React, { useState } from 'react';
import { VictoryArea, VictoryChart, VictoryTheme } from 'victory-native';
import { WrapperView, Title } from './styled';
import ChartFilter from '../ChartFilter';

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 },
	{ quarter: 5, earnings: 16500 },
	{ quarter: 6, earnings: 14250 },
];

const Chart = () => {
	const [label, setLabel] = useState();
	return (
		<WrapperView>
			<Title dark center>
				periodo desde {label}
			</Title>
			<VictoryChart style={{ parent: { maxWidth: '100%' } }} theme={VictoryTheme.material}>
				<VictoryArea
					style={{ data: { fill: '#48BCDF' } }}
					data={data}
					x="quarter"
					y="earnings"
					animate={{
						duration: 2000,
						onLoad: { duration: 2000 },
					}}
				/>
			</VictoryChart>
			<ChartFilter setLabel={setLabel} />
		</WrapperView>
	);
};

export default Chart;
