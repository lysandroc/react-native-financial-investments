import styled from 'styled-components/native';
import Text from '../../components/common/Text';

export const WrapperView = styled.View`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	height: 100%;
	background-color: transparent;
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
