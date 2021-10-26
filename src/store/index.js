import { createStore } from 'redux';
import messageReducer from "../reducers";

export default createStore(messageReducer);