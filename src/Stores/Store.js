import { createStore, compose , applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import rootReducer from '../Reducers/index';

const enhancerList = [];

const composedEnhancer = compose(applyMiddleware(thunk, logger), ...enhancerList);

export const initStore = () => createStore(rootReducer, {}, composedEnhancer);
