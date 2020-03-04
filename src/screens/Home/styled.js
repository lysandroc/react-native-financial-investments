import styled from 'styled-components/native';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native';

export const View = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 100%;
	background-color: transparent;
`;
export const Text = styled.Text`
	align-items: center;
	justify-content: center;
	font-family: 'Poppins-Bold';
	font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
	font-size: ${({ large }) => (large ? '16px' : '14px')};
	text-align: ${({ center }) => (center ? 'center' : 'left')};
	color: ${({ dark }) => (dark ? '#1c2124' : '#ffffff')};
`;

export const Header = styled.View`
	display: flex;
	flex-direction: row;
	padding: 15px 15px 0;
`;

export const HeaderTitle = styled(Text)`
	flex: 1;
`;

export const Logo = styled.Image`
	width: 25px;
	height: 25px;
`;

export const Card = styled.View`
	flex: 1;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 10px;
	margin: 10px 10px 15px;
	padding: 10px;
`;

export const Earning = styled.View`
	flex-basis: 20%;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: center;
`;

export const EarningText = styled(Text)`
	flex: 1 100%;
	color: #505d65;
	font-size: 42px;
`;

export const Percentage = styled(Text)`
	flex: 1 50%;
	color: green;
`;

export const AmountInvested = styled(Text)`
	flex: 1 50%;
	color: #505d65;
`;

export const ChartSection = styled.View`
	flex: 1 100%;
	align-content: center;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const CardTitle = styled(Text)`
	flex: 1 100%;
	font-family: 'Poppins-Medium';
	font-size: 18px;
`;

export const ChartFilterOption = styled.TouchableOpacity`
	flex: 1 100%;
	border: 1px solid gray;
	border-radius: 4px;
	max-width: 60px;
	margin: auto;
`;
