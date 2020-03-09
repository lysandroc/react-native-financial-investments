import React from 'react';
import { WrapperView, Earning, Percentage, MoneyInvested } from './styled';

import { currency } from '../../../utils/masks';

const EarningHeader = ({ amountInvested = 0 }) => {
	return (
		<WrapperView>
			<Earning dark center accessibilityLabel="earning-value">
				R$ {currency.mask(amountInvested)}
			</Earning>
			<Percentage bold large center accessibilityLabel="percentage-value">
				+150%
			</Percentage>
			<MoneyInvested large accessibilityLabel="earning-invested">
				R$ {currency.mask(amountInvested / 2.5)}
			</MoneyInvested>
		</WrapperView>
	);
};

export default EarningHeader;
