import styled from 'styled-components/native';

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
	font-size: ${({ large }) => (large ? '20px' : '16px')};
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
	border: 1px solid red;
`;

export const EarningText = styled(Text)`
	flex: 1 100%;
	color: #505d65;
	font-size: 42px;
	font-weight: bold;
	padding-top: 30px;
	border: 1px solid red;
`;

export const Percentage = styled(Text)`
	flex: 1 50%;
	color: #505d65;
	font-size: 16px;
	text-align: center;
	font-weight: bold;

	border: 1px solid red;
`;

export const AmountInvested = styled(Text)`
	flex: 1 50%;
	color: #505d65;
	font-size: 16px;
	/* text-align: center; */
	font-weight: bold;

	border: 1px solid red;
`;

export const ChartSection = styled.View`
	flex-basis: 75%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	/* justify-content: center;
	align-items: flex-end; */
	border: 1px solid brown;
`;

export const Chart = styled.View`
	border: 1px solid red;
`;
