import { createStore } from 'redux';
import email from '../reducers/reducersEmail'

const store = createStore(email);

export default store;
