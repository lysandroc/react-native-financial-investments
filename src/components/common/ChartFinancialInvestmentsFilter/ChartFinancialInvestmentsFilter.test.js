import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, wait, cleanup, fireEvent } from '@testing-library/react-native';
import { setRecordsFiltered } from '../../../redux/actions/actionCreators';

import ChartFinancialInvestmentsFilter from './ChartFinancialInvestmentsFilter';

const mockStore = configureStore([]);

const mock = {
	'01/01/2020': {
		day: '01/01/2020',
		yieldValue: 1000,
	},
	'02/01/2020': {
		day: '01/01/2020',
		yieldValue: 2000,
	},
	'03/01/2020': {
		day: '01/01/2020',
		yieldValue: 3000,
	},
};

const setLabel = jest.fn(text => text);

describe('should test <ChartFinancialInvestmentsFilter/>', () => {
	let store;
	let component;
	const props = {
		setRecordsFiltered,
	};

	beforeEach(() => {
		jest.clearAllMocks();
		store = mockStore({
			financialInvestments: { records: mock },
		});
		store.dispatch = jest.fn();
		component = render(
			<Provider store={store}>
				<ChartFinancialInvestmentsFilter setLabel={setLabel} />
			</Provider>
		);
	});

	afterEach(cleanup);
	it('should be dispatched', () => {
		wait(() => {
			expect(store.dispatch).toHaveBeenCalledTimes(1);
		});
	});

	it('should validate if filter was applied', () => {
		fireEvent.press(component.queryByLabelText('button-period-1'));
		wait(() => {
			expect(setLabel).toBeCalledWith('três últimos meses');
		});
	});
});
