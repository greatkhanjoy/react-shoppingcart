import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART } from "../constants"

export const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: action.payload
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: action.payload
            }
        case UPDATE_CART:
            return {
                ...state,
                cartItems: action.payload
            }
        case CLEAR_CART:
            return {
                ...state,
                cartItems: action.payload
            }
        default:
            return state;
    }
}