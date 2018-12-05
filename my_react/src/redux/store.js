import {createStore} from 'redux';
import { reducer } from './reducer';

const store = createStore(reducer, { messages: [], text: '' });

export default store