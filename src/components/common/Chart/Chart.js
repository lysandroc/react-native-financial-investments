import React from 'react';
import { WrapperView, Title } from './styled';

const Chart = ({ children, label }) => {
	return (
		<WrapperView>
			<Title dark center accessibilityLabel="period-label">
				Período: {label}
			</Title>
			{children}
		</WrapperView>
	);
};

export default Chart;
