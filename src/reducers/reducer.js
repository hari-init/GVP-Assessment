import {
  TOGGLE_FORM,
  TOGGLE_FORM_WITH_DATA,
  RESET_FORM,
  UPDATE_LIST,
  SET_ACTION,
} from "../actionTypes/actionTypes";

const initialState = {
  isToggle: false,
  formValues: {
    jobTitle: "",
    companyName: "",
    industry: "",
    location: "",
    remote: "",
    expMin: "",
    expMax: "",
    salaryMin: "",
    salaryMax: "",
    totalEmp: "",
    applyType: "",
  },
  isUpdate: false,
  jobCardID: "",
  updateList: false,
  currentAction: 'GET_LIST'
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTION:
      return {
        ...state,
        currentAction: action.payload
      };
    case TOGGLE_FORM:
      return {
        ...state,
        isToggle: !state.isToggle,
      };
    case UPDATE_LIST:
      return {
        ...state,
        updateList: action.payload,
      };
    case TOGGLE_FORM_WITH_DATA:
      return {
        ...state,
        formValues: action.payload,
        isToggle: !state.isToggle,
        isUpdate: !state.isUpdate,
        jobCardID: action?.payload?.id,
      };
    case RESET_FORM:
      return {
        ...state,
        formValues: {
          jobTitle: "",
          companyName: "",
          industry: "",
          location: "",
          remote: "",
          expMin: "",
          expMax: "",
          salaryMin: "",
          salaryMax: "",
          totalEmp: "",
          applyType: "",
        },
      };

    default:
      return state;
  }
};
