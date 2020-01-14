
import { createStore, applyMiddleware } from "redux";
import quizDataReducer from './store/reducers';
import thunk from 'redux-thunk';

export default createStore(quizDataReducer, applyMiddleware(thunk));