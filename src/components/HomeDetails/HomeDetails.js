import React from 'react';
import { Card } from './styled';
import EarningHeader from '../common/EarningHeader';
import Chart from '../common/Chart';

const HomeDetails = () => {
	return (
		<Card elevation={5}>
			<EarningHeader />
			<Chart />
		</Card>
	);
};

export default HomeDetails;
