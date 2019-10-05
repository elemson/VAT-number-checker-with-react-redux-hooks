
vatInfo: {

}

export const vatInfo = (state = vatInfo, action) => {

    if (action.type = "FETCH_VAT_INFO") {

        state = { ...state, vatInfo: action.payload }

    }

    return state;
}

