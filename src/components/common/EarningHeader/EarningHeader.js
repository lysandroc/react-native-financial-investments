import React from 'react';
import { WrapperView, Earning, Percentage, MoneyInvested } from './styled';

const EarningHeader = () => {
	return (
		<WrapperView>
			<Earning dark center>
				R$ 817.239,28
			</Earning>
			<Percentage bold large center>
				+280%
			</Percentage>
			<MoneyInvested large>R$ 407.239,28</MoneyInvested>
		</WrapperView>
	);
};

export default EarningHeader;
