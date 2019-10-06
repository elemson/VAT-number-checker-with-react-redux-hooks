import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from "react-redux";

//actions
import {fetchVatInfoAction } from "./actions/fetchVatInfo.Action"


function App() {

//set vatNumber
let [vatNumber, setVatNumber] = useState("");

const vatCheckSelector = useSelector((state) => state);
const dispatch = useDispatch();
const getVatInfoAction = (value) => dispatch(fetchVatInfoAction(value));

const getVatInfo = (e) => {
  e.preventDefault();

vatNumber === "" ?   console.log("no Vat Number to search") : getVatInfoAction(vatNumber); console.log(vatCheckSelector.vatInfo);

}

const {Address } = vatCheckSelector.vatInfo;
console.log({Address}) 
let details = "";
 vatCheckSelector ? details = <div className="Details">
   <h4>Vat Info</h4>
   <p>{Address}</p>
   </div> : details = <p>You need to type a vat Number</p>;


  return (
    <React.Fragment>
  
    <div className="App">
        <header>

          <h1>Vat Check</h1>
        </header>
      
      <main>
        <form onSubmit= {getVatInfo}>
          <div className="control">
            <input type="text" name="" placeholder="Vat Number" onChange= {e => setVatNumber(e.target.value) }>

            </input>
            <input type="submit" value="check vat Number"></input>
          </div>
          
        </form>

        {details}


      </main>
      </div>
    
</React.Fragment>
  )
}



export default App;
