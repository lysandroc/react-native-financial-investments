import React from 'react';
import { render, wait, cleanup } from '@testing-library/react-native';
import EarningHeader from '../EarningHeader';

describe('should test <HeaderImage/>', () => {
	let component;
	let props = { amountInvested: 1000.0 };

	beforeEach(() => {
		jest.clearAllMocks();
		component = render(<EarningHeader {...props} />);
	});

	afterEach(cleanup);

	it('snapshot should be valid', () => {
		expect(component.baseElement).toMatchSnapshot();
	});

	it('should return earning value correctly', () => {
		const earningValue = component.queryByLabelText('earning-value');
		expect(earningValue).toHaveTextContent('R$ 1.000,00');
	});

	it('should return percentage correctly', () => {
		const percentageValue = component.queryByLabelText('percentage-value');
		expect(percentageValue).toHaveTextContent('+150%');
	});

	it('should return earning invested correctly', () => {
		const earningInvested = component.queryByLabelText('earning-invested');
		expect(earningInvested).toHaveTextContent('R$ 400,00');
	});
});
