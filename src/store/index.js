import { createStore, applyMiddleware } from 'redux';
import quoteReducer from '../reducers';
import thunk from 'redux-thunk';

export default createStore(quoteReducer, applyMiddleware(thunk));