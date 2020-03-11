import {call, put, takeLatest, select, all} from 'redux-saga/effects';
import actionTypes from '../../ActionTypes';
import WidgetActions from './Actions';
import API from '@api/NetworkAPI';
import Paths from '@api/Paths';
import {get, isEmpty } from 'lodash';

const {FETCH_WIDGET_REQUEST} = actionTypes;
const {onSuccessFetchingWidgets, onFailureFetchingWidgets} = WidgetActions;

function* handleWidgetRequest(action) {
  try {
    var url = getParsedUrl(action);
    const widgetResponse = yield API.get(url);
    const { data } = widgetResponse;
    yield put(onSuccessFetchingWidgets(data));
  } catch (e) {
    yield put(onFailureFetchingWidgets('Not Authorised'));
  }
}

const getParsedUrl = (action) => {
  const { payload: { asgardUserId, id , widgetTreeId } } = action;

  var url = Paths.getWidgets+"?userId="+asgardUserId;

  if(!isEmpty(id))
    url += "&widgetId="+id;

  if(!isEmpty(widgetTreeId))
    url += "&widgetTreeId="+widgetTreeId;

  return url;
}

export function* fetchWidgets() {
  yield takeLatest(FETCH_WIDGET_REQUEST, handleWidgetRequest);
}
