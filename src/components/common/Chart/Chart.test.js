import React from 'react';
import { View, Text } from 'react-native';
import { render, cleanup } from '@testing-library/react-native';
import Chart from './Chart';

describe('should test <Chart/>', () => {
	let component;
	let props = {
		label: 'period text here',
		children: (
			<View>
				<Text accessibilityLabel="children-text">children here</Text>
			</View>
		),
	};

	beforeEach(() => {
		jest.clearAllMocks();
		component = render(<Chart {...props} />);
	});

	afterEach(cleanup);

	it('snapshot should be valid', () => {
		expect(component.baseElement).toMatchSnapshot();
	});

	it('should return earning value correctly', () => {
		const periodLabel = component.queryByLabelText('period-label');
		expect(periodLabel).toHaveTextContent(`Período: ${props.label}`);
	});

	it('should return temporary children value correctly', () => {
		const childrenText = component.queryByLabelText('children-text');
		expect(childrenText).toHaveTextContent('children here');
	});
});
