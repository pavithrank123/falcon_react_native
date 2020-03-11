import actionTypes from '../../ActionTypes';

const {FETCH_WIDGET_REQUEST, FETCH_WIDGET_SUCCESS, FETCH_WIDGET_ERROR} = actionTypes;

const initialState = {
  widgetData: {},
  error: '',
  isLoading: false,
};

const widgetReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WIDGET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WIDGET_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        widgetData: {},
      };
    case FETCH_WIDGET_SUCCESS:
      return {
        ...state,
        error: '',
        isLoading: false,
        widgetData: action.payload,
      };
    default:
      return state;
  }
};

export default widgetReducer;
