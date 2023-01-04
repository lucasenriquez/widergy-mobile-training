import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import history from './history/reducer';
import thunk from 'redux-thunk';
import reactotron from '../ReactotronConfig';
import forms from './forms/reducer'

const middlewares = [];
const enhancers = [];
const allReducers = combineReducers({history, forms})

middlewares.push(thunk);
enhancers.push(applyMiddleware(...middlewares));

const createAppropriateStore = createStore;

export default createAppropriateStore(
  allReducers,
  compose(...enhancers, reactotron.createEnhancer()),
);
