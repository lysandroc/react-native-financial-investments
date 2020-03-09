import styled from 'styled-components/native';
import Text from '../Text';

export const WrapperView = styled.View`
	flex-basis: 20%;
	flex-direction: row;
	flex-wrap: wrap;
	align-content: flex-end;
`;

export const Earning = styled(Text)`
	flex: 1 100%;
	color: #505d65;
	font-size: 42px;
`;

export const Percentage = styled(Text)`
	flex: 1 50%;
	color: green;
`;

export const MoneyInvested = styled(Text)`
	flex: 1 50%;
	color: #505d65;
`;
