import { ADD_TO_CART } from "../constants"

export const addToCart = (product) => async (dispatch, getState) => {
    console.log("addToCart", product)
    dispatch({
        type: ADD_TO_CART,
        payload: product
    })
}