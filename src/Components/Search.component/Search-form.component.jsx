import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//actions
import { fetchVatInfoAction } from "../../Redux/Actions/FetchVatInfo.Action";
import CustomButton from "../Custom-button-component/Custom-button.component";

function Search() {
  useEffect(() => {
    fetchVatInfoAction();
  });

  //set vatNumber
  let [vatNumber, setVatNumber] = useState("");

  const vatCheckSelector = useSelector(state => state);
  const dispatch = useDispatch();
  const getVatInfoAction = vatNumber => dispatch(fetchVatInfoAction(vatNumber));

  const getVatInfo = e => {
    e.preventDefault();
    vatNumber === ""
      ? console.log("no Vat Number to search")
      : console.log(vatCheckSelector.vatInfo.vatInfo);
    getVatInfoAction(vatNumber);
  };

  return (
    <React.Fragment>
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-search" />
          Get your Vat details
        </h1>

        <form onSubmit={getVatInfo}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              name=""
              placeholder=""
              onChange={e => setVatNumber(e.target.value)}
            />
          </div>
          <CustomButton type="submit">Get Vat details</CustomButton>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Search;
