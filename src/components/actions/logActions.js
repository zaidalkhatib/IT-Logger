import {
  GET_LOGS,
  SET_LOADING,
  LOG_ERROR,
  ADD_LOGS,
  DELETE_LOGS,
} from "../types";

export const getLogs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("/logs");
      const data = await res.json();
      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOG_ERROR,
        payload: error.response.msg,
      });
    }
  };
};
export const deleteLogs = (index) => {
  return async (dispatch) => {
    await fetch(`/logs/${index}`, {
      method: "DELETE",
    });
    dispatch({type: DELETE_LOGS, payload: index});
  };
};

export const addLogs = (log) => async (dispatch) => {
  console.log(log);
  const res = await fetch("/logs", {
    method: "POST",
    body: JSON.stringify(log),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  dispatch({type: ADD_LOGS, payload: data});
};
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
