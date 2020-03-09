import styled from 'styled-components/native';
import Text from '../Text';

export const WrapperView = styled.View`
	flex: 1 100%;
	align-content: center;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const Title = styled(Text)`
	flex-basis: 100%;
	font-size: 18px;
	font-family: 'Poppins-MediumItalic';
`;
