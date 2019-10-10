import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchVatInfoAction } from "../../Redux/Actions/FetchVatInfo.Action";

import CustomButton from "../Custom-button-component/Custom-button.component";

const Search = props => {
  let [vatNumber, setVatNumber] = useState("");

  const dispatch = useDispatch();
  const getVatInfoAction = vatNumber => dispatch(fetchVatInfoAction(vatNumber));

  const getVatInfo = e => {
    e.preventDefault();
    vatNumber === ""
      ? alert("No VAT Number to check, Please input a VAT Number")
      : getVatInfoAction(vatNumber);
  };

  return (
    <React.Fragment>
      <div className="card card-body mb-4 p-4">
        <div className="d-flex justify-content-center align-items-center">
          <i className="fa fa-search fa-10x" />
          <div className="mb sm-100 ">
            <h1>VAT LookUp</h1>
          </div>
        </div>

        <form onSubmit={getVatInfo}>
          <div className="form-group pt-4">
            <input
              type="text"
              className="form-control form-control-lg "
              name=""
              placeholder="Enter ID. Example: EE100247019"
              onChange={e => setVatNumber(e.target.value)}
            />
          </div>

          <CustomButton type="submit">
            <b>Get VAT details</b>
          </CustomButton>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Search;
