import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import reducers from './rootReducer';
import sagas from './rootSagas';
import persistReducers from './persistReducers';

const middlewares = [];

const sagaMonitor = null;
// process.env.NODE_ENV === 'development'
//   ? console.tron.createSagaMonitor()
//   : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));
// process.env.NODE_ENV === 'development'
// ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
// : compose(applyMiddleware(...middlewares));

const store = createStore(persistReducers(reducers), composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
