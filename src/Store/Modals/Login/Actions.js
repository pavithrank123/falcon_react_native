import actionTypes from '../../ActionTypes';
const {LOGIN_DATA_REQUEST, LOGIN_DATA_SUCCESS, LOGIN_DATA_ERROR} = actionTypes;

const handleLoginRequest = data => ({
  type: LOGIN_DATA_REQUEST,
  payload: data,
});

const onSuccessOfLoginRequest = data => ({
  type: LOGIN_DATA_SUCCESS,
  payload: data,
});

const onFailureOfLoginRequest = error => ({
  type: LOGIN_DATA_ERROR,
  payload: error,
});

export default {
  handleLoginRequest,
  onSuccessOfLoginRequest,
  onFailureOfLoginRequest,
};
