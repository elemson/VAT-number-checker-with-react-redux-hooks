import FetchActionTypes from "../Actions/FetchVatInfo.types";

const initialState = {
  isFetching: false,
  errorMessage: "",
  vatInfo: []
};

//destruction type and payload out of action

export const vatInfo = (state = initialState, { type, payload }) => {
  switch (type) {
    case FetchActionTypes.FETCH_VAT_REQUEST:
      return { ...state, isFetching: true };

    case FetchActionTypes.FETCH_VAT_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload };

    case FetchActionTypes.FETCH_VAT_SUCCESS:
      return { ...state, isFetching: false, vatInfo: payload };

    default:
      return state;
  }
};

export default vatInfo;
