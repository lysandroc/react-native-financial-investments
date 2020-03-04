import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import { WrapperView, Title, OptionTouchable } from './styled';
import Text from '../Text';

const data = [
	{ quarter: 1, earnings: 13000 },
	{ quarter: 2, earnings: 16500 },
	{ quarter: 3, earnings: 14250 },
	{ quarter: 4, earnings: 19000 },
	{ quarter: 5, earnings: 16500 },
	{ quarter: 6, earnings: 14250 },
	{ quarter: 7, earnings: 19000 },
	{ quarter: 8, earnings: 16500 },
	{ quarter: 9, earnings: 14250 },
	{ quarter: 10, earnings: 19000 },
	{ quarter: 10, earnings: 55000 },
];

const ChartBar = () => {
	return (
		<WrapperView>
			<Title dark large center>
				Você está vendo o período desde o início
			</Title>
			<VictoryChart style={{ parent: { maxWidth: '100%' } }} theme={VictoryTheme.material}>
				<VictoryBar data={data} x="quarter" y="earnings" />
			</VictoryChart>
			<OptionTouchable>
				<Text center large dark>
					1M
				</Text>
			</OptionTouchable>
			<OptionTouchable>
				<Text center large dark>
					3M
				</Text>
			</OptionTouchable>
			<OptionTouchable>
				<Text center large dark>
					1A
				</Text>
			</OptionTouchable>
			<OptionTouchable>
				<Text center large dark>
					2A
				</Text>
			</OptionTouchable>
			<OptionTouchable>
				<Text center large dark>
					TODOS
				</Text>
			</OptionTouchable>
		</WrapperView>
	);
};

export default ChartBar;
