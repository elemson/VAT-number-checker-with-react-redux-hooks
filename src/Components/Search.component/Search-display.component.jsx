import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../Layout.component/Spinner.component";

const SearchDisplay = () => {
  const vatCheckSelector = useSelector(state => state);
  console.log(vatCheckSelector);

  let details = "";
  vatCheckSelector.vatInfo.isFetching
    ? (details = (
        <div className="col-mb-6 text-center pb-1">
          <Spinner />
        </div>
      ))
    : vatCheckSelector.vatInfo.vatInfo.hasOwnProperty("Name")
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
                  <th scope="col">Valid</th>
                </tr>
              </thead>
              <tbody>
                <td>{vatCheckSelector.vatInfo.vatInfo.Name}</td>
                <td>{vatCheckSelector.vatInfo.vatInfo.Address}</td>
                <td>{vatCheckSelector.vatInfo.vatInfo.VATNumber}</td>
                <td>{vatCheckSelector.vatInfo.vatInfo.CountryCode}</td>
                <td>{vatCheckSelector.vatInfo.vatInfo.RequestDate}</td>
                <td>{vatCheckSelector.vatInfo.vatInfo.Valid.toString()}</td>
              </tbody>
            </table>
          </strong>
        </div>
      ))
    : vatCheckSelector.vatInfo.vatInfo.hasOwnProperty("error")
    ? (details = <div className="col-mb-6 text-center">No record found</div>)
    : (details = <div className="col-mb-6 text-center"></div>);

  return <div>{details}</div>;
};

export default SearchDisplay;
