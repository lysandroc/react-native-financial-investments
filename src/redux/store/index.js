import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import Reactotron from '../../config/ReactotronConfig';
import createStore from './createStore';
import persistReducers from './persistReducers';
import rootReducer from '../reducers/rootReducer';
import rootSaga from '../reducers/rootSaga';

const sagaMonitor = (__DEV__ && Reactotron.createSagaMonitor()) || null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
