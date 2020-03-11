import {combineReducers} from 'redux';
import LoginReducer from './Modals/Login/Reducer';
import WidgetReducer from './Modals/Widget/Reducer';

const reducers = combineReducers({
  login: LoginReducer,
  widget: WidgetReducer
});

export default reducers;
