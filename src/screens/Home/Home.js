import React from 'react';
import {
	View,
	Card,
	HeaderTitle,
	Text,
	AmountInvested,
	Percentage,
	ChartSection,
	CardTitle,
	Chart,
	ChartFilterOption,
	Earning,
	EarningText,
	Header,
	Logo,
} from './styled';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';
import LinearGradient from 'react-native-linear-gradient';

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

import img from '../../assets/logo-mobile.png';

const Home = () => {
	return (
		<LinearGradient colors={['#5ABEB9', '#9cf184', '#9cf184']} locations={[0.5, 0.9, 1]}>
			<View>
				<Header>
					<Logo source={img} resizeMode="cover" testID="image-element" />
					<HeaderTitle center>Meus investimentos</HeaderTitle>
				</Header>
				<Card elevation={5}>
					<Earning>
						<EarningText dark center>
							R$ 817.239,28
						</EarningText>
						<Percentage bold large center>
							+280%
						</Percentage>
						<AmountInvested large>R$ 407.239,28</AmountInvested>
					</Earning>
					<ChartSection>
						<CardTitle dark large center>
							Você está vendo o período desde o início
						</CardTitle>
						<VictoryChart style={{ parent: { maxWidth: '100%' } }} theme={VictoryTheme.material}>
							<VictoryBar data={data} x="quarter" y="earnings" />
						</VictoryChart>
						<ChartFilterOption>
							<Text center large dark bold>
								1M
							</Text>
						</ChartFilterOption>
						<ChartFilterOption>
							<Text center large dark bold>
								3M
							</Text>
						</ChartFilterOption>
						<ChartFilterOption>
							<Text center large dark bold>
								1A
							</Text>
						</ChartFilterOption>
						<ChartFilterOption>
							<Text center large dark bold>
								2A
							</Text>
						</ChartFilterOption>
						<ChartFilterOption>
							<Text center large dark bold>
								TODOS
							</Text>
						</ChartFilterOption>
					</ChartSection>
				</Card>
			</View>
		</LinearGradient>
	);
};

export default Home;
