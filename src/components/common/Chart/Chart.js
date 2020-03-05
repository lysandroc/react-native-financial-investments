import React, { useState } from 'react';
import { VictoryArea, VictoryChart, VictoryTheme } from 'victory-native';
import { WrapperView, Title } from './styled';
import ChartFilter from '../ChartFilter';

const Chart = ({ data }) => {
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
					x="day"
					y="yieldValue"
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
