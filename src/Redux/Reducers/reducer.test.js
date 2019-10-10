import * as reducers from "./VatCheck.reducer";
import * as FETCH_VAT_INFO from "../Actions/FetchVatInfo.types";

describe("vatInfo", () => {
  const initialState = {
    vatInfo: []
  };
  it("Should return the initial state", () => {
    expect(reducers.vatInfo(undefined, {})).toEqual({
      vatInfo: []
    });
  });
});
