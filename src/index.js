import React from 'react';
import { View, Text } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import App from './App';

import './config/ReactotronConfig';

export default function Index() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{bootstrapped => {
					return bootstrapped ? (
						<App />
					) : (
						<View>
							<Text>loading application</Text>
						</View>
					);
				}}
			</PersistGate>
		</Provider>
	);
}
