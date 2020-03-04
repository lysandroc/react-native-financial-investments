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
	flex: 1 100%;
	font-family: 'Poppins-Medium';
	font-size: 18px;
`;

export const OptionTouchable = styled.TouchableOpacity`
	flex: 1 100%;
	max-width: 60px;
	margin: auto;
	/* border: 1px solid gray; */
	/* border-radius: 4px; */
`;
