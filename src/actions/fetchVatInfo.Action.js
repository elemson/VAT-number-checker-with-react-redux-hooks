
export const fetchVatInfoAction = (value)=> {

    return (dispatch) => {
        fetch(`https://vat.erply.com/numbers?vatNumber=${value}`)
        .then(res => { return res.json()
        
        })
        .then(JSONres => {

            //dispatch the action
            dispatch({type: "FETCH_VATINFO",
            payload: JSONres})
        } ).catch(err => {
            console.log(err);
        })
    }
   
}