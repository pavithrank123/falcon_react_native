import {fork, all} from 'redux-saga/effects';
import * as loginSaga from './Modals/Login/Saga';
import * as widgetSaga from './Modals/Widget/Saga';

export default function* rootSaga() {
  yield all([...Object.values(loginSaga), ...Object.values(widgetSaga)].map(fork));
}
