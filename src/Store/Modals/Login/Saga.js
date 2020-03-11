import {call, put, takeLatest, select, all} from 'redux-saga/effects';
import actionTypes from '../../ActionTypes';
import LoginActions from './Actions';
import API from '@api/NetworkAPI';
import Paths from '@api/Paths';

const {LOGIN_DATA_REQUEST} = actionTypes;
const {onSuccessOfLoginRequest, onFailureOfLoginRequest} = LoginActions;

function* handleSubmissionOfLoginDetails(action) {
  try {
    const { payload: { userName, password } } = action;
    const loginResponse = yield API.post(Paths.loginPath, {userName, password});
    const { asgardUser } = loginResponse;
    yield put(onSuccessOfLoginRequest(asgardUser));
  } catch (e) {
    yield put(onFailureOfLoginRequest('Not Authorised'));
  }
}

export function* submitLoginDetails() {
  yield takeLatest(LOGIN_DATA_REQUEST, handleSubmissionOfLoginDetails);
}
