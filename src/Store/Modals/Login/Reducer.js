import actionTypes from '../../ActionTypes';

const {LOGIN_DATA_REQUEST, LOGIN_DATA_SUCCESS, LOGIN_DATA_ERROR} = actionTypes;

const initialState = {
  loginData: {},
  error: '',
  isLoading: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        loginData: {},
      };
    case LOGIN_DATA_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        loginData: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
