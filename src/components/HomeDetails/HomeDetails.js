import React from 'react';
import { Card } from './styled';
import EarningHeader from '../common/EarningHeader';
import ChartBar from '../common/ChartBar';

const HomeDetails = () => {
	return (
		<Card elevation={5}>
			<EarningHeader />
			<ChartBar />
		</Card>
	);
};

export default HomeDetails;
