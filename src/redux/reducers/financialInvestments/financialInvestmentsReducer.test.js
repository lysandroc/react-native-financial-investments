import reducer from './financialInvestmentsReducer';
import * as actionTypes from '../../actions/actionTypes';

let initialState = null;

describe('should validate financialInvestmentsReducer', () => {
	beforeEach(() => {
		initialState = {
			records: [],
			recordsFiltered: [],
		};
	});

	it('should set the records', () => {
		const investmentsRecord = {
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

		expect(
			reducer(initialState, {
				type: actionTypes.SET_INVESTMENT_RECORD,
				payload: investmentsRecord,
			})
		).toStrictEqual({
			records: investmentsRecord,
			recordsFiltered: investmentsRecord,
		});
	});

	it('should filter the records', () => {
		const investmentsRecord = {
			'01/02/2020': {
				day: '01/02/2020',
				yieldValue: 1000,
			},
			'01/01/2020': {
				day: '01/01/2020',
				yieldValue: 2000,
			},
			'01/12/2019': {
				day: '01/12/2019',
				yieldValue: 3000,
			},
		};

		const recordsFiltered = {
			'01/02/2020': {
				day: '01/02/2020',
				yieldValue: 1000,
			},
			'01/01/2020': {
				day: '01/01/2020',
				yieldValue: 2000,
			},
		};

		expect(
			reducer(
				{ records: investmentsRecord },
				{
					type: actionTypes.SET_FILTER_INVESTMENT_RECORD,
					payload: recordsFiltered,
				}
			)
		).toStrictEqual({
			records: investmentsRecord,
			recordsFiltered,
		});
	});

	it('should dispatch a fetch', () => {
		expect(
			reducer(initialState, {
				type: actionTypes.FETCH_INVESTMENT_RECORD,
			})
		).toStrictEqual({
			...initialState,
			loading: true,
		});
	});

	it('should dispatch a fail', () => {
		expect(
			reducer(initialState, {
				type: actionTypes.SET_FAILURE,
			})
		).toStrictEqual({
			...initialState,
			loading: false,
		});
	});
});
