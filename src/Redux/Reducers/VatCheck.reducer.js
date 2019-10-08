//destructure payload from action
export const vatInfo = (state = { vatInfo: [] }, { type, payload }) => {
  switch (type) {
    case "FETCH_VAT_INFO":
      return {
        ...state,
        vatInfo: payload
      };

    default:
      return state;
  }
};
