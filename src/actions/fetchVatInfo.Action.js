
export const fetchVatInfoAction = (value)=> {

    return (dispatch) => {
        fetch(`httpS://vat.erply.com/numbers?vatNumber=${value}`)
        .then(res => { return res.json()
        
        })
        .then(JSONres => {

            //dispatch the action
            dispatch({type: "FETCH_VAT_INFO",
            payload: JSONres})
        } ).catch(err => {
            console.log(err);
        })
    }
   
}