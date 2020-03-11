import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger'
import AsyncStorage from '@react-native-community/async-storage';
import AppReducers from './RootReducer';
import allSagas from './RootSaga';

let reduxStore;
let sagaMiddleware;
let persiststore;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, AppReducers);

const configureStore = () => {
  if (!reduxStore) {
    sagaMiddleware = createSagaMiddleware();
    const storeMiddleWares = [logger,sagaMiddleware];

    // Apply all middleWares to Redux Store
    const allMiddleWares = applyMiddleware(...storeMiddleWares);

    // creating a store with reducers and middleWares
    reduxStore = createStore(persistedReducer, allMiddleWares);
    persiststore = persistStore(reduxStore);

    // Running all Worker Sagas
    sagaMiddleware.run(allSagas);

    return {store: reduxStore, persiststore};
  }
  return {store: reduxStore, persiststore};
};

export default configureStore;
