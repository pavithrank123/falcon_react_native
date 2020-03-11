import actionTypes from '../../ActionTypes';
const {FETCH_WIDGET_ERROR, FETCH_WIDGET_REQUEST, FETCH_WIDGET_SUCCESS} = actionTypes;

const handleFetchWidgetRequest = data => ({
  type: FETCH_WIDGET_REQUEST,
  payload: data,
});

const onSuccessFetchingWidgets = data => ({
  type: FETCH_WIDGET_SUCCESS,
  payload: data,
});

const onFailureFetchingWidgets = error => ({
  type: FETCH_WIDGET_ERROR,
  payload: error,
});

export default {
    handleFetchWidgetRequest,
    onSuccessFetchingWidgets,
    onFailureFetchingWidgets,
};
