import {
  GET_LOGS,
  SET_LOADING,
  LOG_ERROR,
  ADD_LOGS,
  DELETE_LOGS,
} from "../components/types";

const initalState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {...state, loading: true};
    }
    case GET_LOGS: {
      return {...state, loading: false, logs: action.payload};
    }
    case LOG_ERROR: {
      return {...state, error: action.payload};
    }
    case DELETE_LOGS: {
      return {
        ...state,
        logs: [
          ...state.logs.filter((log) => {
            return log.id !== action.payload;
          }),
        ],
      };
    }
    case ADD_LOGS: {
      return {...state, logs: [...state.logs, action.payload]};
    }
    default:
      return state;
  }
};
