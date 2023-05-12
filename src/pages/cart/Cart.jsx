import React, { useContext } from 'react'
import Product from '../../product'
import ShopContext from '../../context/ShopContext'
import CartItem from './CartItem'
import './cart.css'
import { Navigate,useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems,getTotalAmount} = useContext(ShopContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {Product.map((product)=>{
          if(cartItems[product.id]){
            return <CartItem data={product}/>
          }
        })}
      </div>
      {totalAmount > 0 ? (
      <div className="checkout">
        <p>
          SubTotal : $ {totalAmount}
        </p>
        <button onClick={()=> navigate("/")} >Continue Shopping</button>
        <button> Checkout</button>
      </div>
      ): (<h1> Your Cart is Empty </h1>)}
    </div>
  )
}

export default Cart