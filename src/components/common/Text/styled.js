import styled from 'styled-components/native';

const Text = styled.Text`
	align-items: center;
	justify-content: center;
	font-family: 'Poppins-Bold';
	font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
	font-size: ${({ large }) => (large ? '16px' : '14px')};
	text-align: ${({ center }) => (center ? 'center' : 'left')};
	color: ${({ dark }) => (dark ? '#1c2124' : '#ffffff')};
`;

export default Text;
