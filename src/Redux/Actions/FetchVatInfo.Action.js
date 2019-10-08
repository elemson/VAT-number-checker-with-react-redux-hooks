import FetchActionTypes from "./FetchVatInfo.types.";
import { promised } from "q";

//Reduc thunk
export const fetchVatInfoAction = value => {
  return dispatch => {
    fetch(`httpS://vat.erply.com/numbers?vatNumber=${value}`)
      .then(res => {
        return res.json();
      })
      .then(JSONres => {
        //dispatch the action
        dispatch({ type: FetchActionTypes.FETCH_VAT_INFO, payload: JSONres });
      })
      .catch(err => {
        alert(err);
      });
  };
};
