import React, { useState } from 'react';
import { VictoryChart, VictoryTheme } from 'victory-native';
import { WrapperView, Title } from './styled';

const Chart = ({ children, label }) => {
	return (
		<WrapperView>
			<Title dark center>
				{label}
			</Title>
			{children}
		</WrapperView>
	);
};

export default Chart;
