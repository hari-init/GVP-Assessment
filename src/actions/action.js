import {
  TOGGLE_FORM,
  TOGGLE_FORM_WITH_DATA,
  RESET_FORM,
  UPDATE_LIST,
  SET_ACTION
} from "../actionTypes/actionTypes";

const toggleForm = () => {
  return {
    type: TOGGLE_FORM,
  };
};

const toggleFormWithData = (data) => {
  return {
    type: TOGGLE_FORM_WITH_DATA,
    payload: data,
  };
};

const resetForm = (data) => {
  return {
    type: RESET_FORM,
  };
};

const updateList = (data) => {
  return {
    type: UPDATE_LIST,
    payload: data,
  };
};

const setAction = (data) => {
  return {
    type: SET_ACTION,
    payload: data,
  };
};
export { toggleForm, toggleFormWithData, resetForm, updateList, setAction };
