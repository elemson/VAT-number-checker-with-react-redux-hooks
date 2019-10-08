import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../Layout.component/Spinner.component";

const SearchDisplay = () => {
  const vatCheckSelector = useSelector(state => state);

  let details = "";
  !vatCheckSelector.vatInfo.vatInfo.hasOwnProperty("Name")
    ? (details = (
        <div className="col-mb-6 text-center">
          Please Input Correct Vat Number
        </div>
      ))
    : vatCheckSelector.vatInfo.vatInfo &&
      vatCheckSelector.vatInfo.vatInfo.hasOwnProperty("Name")
    ? (details = (
        <div className="col-mb-6 text-center pb-1">
          <strong>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">VATNumber</th>
                  <th scope="col">Country Code</th>
                  <th scope="col">RequestDate</th>
                </tr>
              </thead>
              <tbody>
                <td>{vatCheckSelector.vatInfo.vatInfo.Name}</td>

                <td>{vatCheckSelector.vatInfo.vatInfo.Address}</td>
                <td>{vatCheckSelector.vatInfo.vatInfo.VATNumber}</td>

                <td>{vatCheckSelector.vatInfo.vatInfo.CountryCode}</td>

                <td>{vatCheckSelector.vatInfo.vatInfo.RequestDate}</td>
              </tbody>
            </table>
          </strong>
        </div>
      ))
    : (details = (
        <div className="col-mb-6 text-center">
          <Spinner />
        </div>
      ));
  return (
    <div>
      <p>{details}</p>
    </div>
  );
};

export default SearchDisplay;
