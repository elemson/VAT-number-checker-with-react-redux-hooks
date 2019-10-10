import { fetchVatInfoAction } from "./FetchVatInfo.Action";
import FetchActionTypes from "./FetchVatInfo.types";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it("handles requesting vat function", () => {
  const store = mockStore();

  store.dispatch(FetchActionTypes.FETCH_VAT_INFO);

  const action = store.getActions();
  console.log("actions", action);
  const expectedAction = {
    type: FetchActionTypes.FETCH_VAT_INFO
  };
  expect(action.toEqual(expectedAction));
});
