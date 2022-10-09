import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers'


const reducer = combineReducers({
    cart: cartReducer
})

const initialState = {
    cart: {
      total: 0,
      totalPrice: 0,
      cartItems: []
    },

}

const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store