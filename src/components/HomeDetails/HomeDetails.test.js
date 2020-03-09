import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, cleanup, wait } from '@testing-library/react-native';
import HomeDetails from './HomeDetails';
import { fetchInvestmentRecord } from '../../redux/actions/actionCreators';
import * as investmentsAPI from '../../services/financialInvestmentsAPI';

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

jest.spyOn(investmentsAPI, 'getFinancialInvestments').mockImplementation(() => Promise.resolve(mock));

describe('should test <HomeDetails/>', () => {
	let store;
	let component;
	const props = {
		fetchInvestmentRecord,
	};

	beforeEach(() => {
		jest.clearAllMocks();
		store = mockStore({
			financialInvestments: { records: mock },
		});
		store.dispatch = jest.fn();
		component = render(
			<Provider store={store}>
				<HomeDetails {...props} />
			</Provider>
		);
	});

	afterEach(cleanup);

	it('should be dispatched', () => {
		wait(() => {
			expect(store.dispatch).toHaveBeenCalledTimes(1);
		});
	});
});
