import styled from 'styled-components/native';

export const ViewWrapper = styled.View`
	/* flex: 1; */
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const OptionTouchable = styled.TouchableOpacity`
	flex: 1 100%;
	max-width: 60px;
	margin: auto;
	${({ selected }) =>
		selected &&
		`
    background-color: #e1e1e1;
    font-weight:bold;
`}
`;
