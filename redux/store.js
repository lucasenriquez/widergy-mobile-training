import {createStore, applyMiddleware, compose} from 'redux';
import history from './history/reducer';
import thunk from 'redux-thunk';
import reactotron from '../ReactotronConfig';

const middlewares = [];
const enhancers = [];


middlewares.push(thunk);
enhancers.push(applyMiddleware(...middlewares));

export default createStore(
  history,
  compose(...enhancers, reactotron.createEnhancer()),
);
