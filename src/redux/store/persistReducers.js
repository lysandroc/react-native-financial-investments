import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export default reducers =>
	persistReducer(
		{
			key: 'root',
			storage: AsyncStorage,
			timeout: 0,
			blacklist: [],
			whitelist: ['financialInvestments'],
		},
		reducers
	);
