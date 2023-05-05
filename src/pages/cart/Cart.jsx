import React, { useContext } from 'react'
import Product from '../../product'
import ShopContext from '../../context/ShopContext'
import CartItem from './CartItem'
import './cart.css'

const Cart = () => {
  const {cartItems} = useContext(ShopContext);
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
    </div>
  )
}

export default Cart