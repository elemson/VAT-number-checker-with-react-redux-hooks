
import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from "react-redux";

//actions
import {fetchVatInfoAction } from "../Redux/Actions/FetchVatInfo.Action"



function Form() {

    //set vatNumber
    let [vatNumber, setVatNumber] = useState("");
    
    const vatCheckSelector = useSelector(state => state);
    const dispatch = useDispatch();
    const getVatInfoAction = (vatNumber) => dispatch(fetchVatInfoAction(vatNumber));
    
    const getVatInfo = (e) => {
      e.preventDefault();
    
     vatNumber === "" ?   console.log("no Vat Number to search") : getVatInfoAction(vatNumber);
    console.log(vatCheckSelector.vatInfo.vatInfo.Address);
    
    }
    
    let details = "";
     vatCheckSelector ? details = <div className="Details">
       <h4>Vat Info</h4>
    {vatCheckSelector.vatInfo.vatInfo.Address}
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
                <input type="submit" ></input>
              </div>
              
            </form>
    
    <p>{details}</p>
           
    
    
          </main>
          </div>
        
    </React.Fragment>
      )
      }
    
    
    
    export default Form;