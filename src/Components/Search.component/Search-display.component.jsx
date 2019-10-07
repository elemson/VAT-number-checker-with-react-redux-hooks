import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../Layout.component/Spinner.component";

const SearchDisplay = () => {
  const vatCheckSelector = useSelector(state => state);

  let details = "";
  vatCheckSelector
    ? (details = (
        <div className="col-md-6">
          <div className="card-md-4">
            <div className="card-body">
              <p className="card-text">
                <strong>
                  <i className="fas fa-play">Address</i>
                </strong>
                : {vatCheckSelector.vatInfo.vatInfo.Address}
                <p>{vatCheckSelector.vatInfo.vatInfo.Name}</p>
                <p>{vatCheckSelector.vatInfo.vatInfo.CountryCode}</p>
              </p>
            </div>
          </div>
        </div>
      ))
    : (details = "nothing tos show");
  return (
    <div>
      <p>{details}</p>
    </div>
  );
};

export default SearchDisplay;
