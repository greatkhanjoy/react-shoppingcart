import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

const  items = [
  {id: 1, name: 'Asus Vivobook X515MA', price: 35500, quantity: 20},
  {id: 2, name: 'Dell E1916HV 18.5 Inch', price: 9300, quantity: 35},
  {id: 3, name: 'Canon Eos 4000D 18MP ', price: 36500, quantity: 72},
]

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  

  const [products, setProducts] = useState(items)

  const totalItems = cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = parseFloat(cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)).toFixed(2)
  const qty = (id) => {

    if(cart.cartItems.length > 0 && cart.cartItems.find(x => x.id === id)){
      return cart.cartItems.find(x => x.id === id).quantity
    }else{
      return 0
    }   
  }

  const addToCart = (product) => {
  products.filter(item => item.id === product.id).map(item => {
      if(item.quantity > 0) {
        item.quantity -= 1
        if(cart.cartItems.find(x => x.id === product.id)) {
            dispatch({type: 'UPDATE_CART', payload: cart.cartItems.map(x => {
                if(x.id === product.id) {
                    return {...item, quantity: x.quantity + 1}
                }
                return x
                })})
        }else{
            dispatch({type: 'ADD_TO_CART', payload: cart.cartItems.concat({...item, quantity: 1})})
        }
      }else{
        alert('Out of stock')
      }
      return item
    })
    setProducts([...products])

  }
  const removeCart = (product) => {
  products.filter(item => item.id === product.id).map(item => {
    const cartItem = cart.cartItems.find(x => x.id === product.id)
      if(cartItem.quantity > 0) {
        item.quantity += 1
        if(cart.cartItems.find(x => x.id === product.id)) {
            dispatch({type: 'UPDATE_CART', payload: cart.cartItems.map(x => {
                if(x.id === product.id) {
                    return {...item, quantity: x.quantity - 1}
                }
                return x
                })})
        }
      }else{
        
      }
      return item
    })
    setProducts([...products])

  }

  return (
    <div className="App">
      <div className="bg-gray-50 h-full md:h-screen">
            <div className="grid place-items-center">
                <h1
                    className="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
                >
                    Shopping Cart
                </h1>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div
                    className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8"
                >
                  {products.map((product) => (
                    <div key={product.id}
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div className="flex justify-between px-4 items-center">
                            <div className="text-lg font-semibold">
                                <p>{product.name} ({product.quantity})</p>
                                <p className="text-gray-400 text-base">Tk {product.price}</p>
                            </div>
                            <div className="text-lg font-semibold">
                                <button onClick={() => addToCart(product)}
                                    className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-2 rounded-full inline-flex items-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                  ))}
                </div>
                <div
                    className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
                >
                    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        {products.map((product) => (
                        <div key={product.id} className="flex justify-between border-b-2 mb-2">
                            <div className="text-lg py-2">
                                <p>{product.name}</p>
                            </div>
                            <div className="text-lg py-2">
                                <div
                                    className="flex flex-row space-x-2 w-full items-center rounded-lg"
                                >
                                    <button
                                    onClick={() => removeCart(product)}
                                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M18 12H6"
                                            />
                                        </svg>
                                    </button>
                                    

                                    <p>{qty(product.id)}</p>
                                    <button
                                    onClick={() => addToCart(product)}
                                        className="focus:outline-none bg-purple-700 hover:bg-purple-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        ))}

                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Item</p>
                                <p className="text-5xl">{totalItems}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
                    >
                        <div
                            className="flex justify-center items-center text-center"
                        >
                            <div className="text-xl font-semibold">
                                <p>Total Price</p>
                                <p className="text-5xl">{totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
