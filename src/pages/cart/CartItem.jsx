import React , {useContext} from 'react'
import ShopContext from '../../context/ShopContext'

const CartItem = (props) => {
    const {id,name,price,image} =props.data;
    const { addCartItem , cartItems ,removeFromCart,updateCartItem } = useContext(ShopContext); 
 
  return (
    <div className="cartItem">
        <img src={image} alt="" />
        <div className="description ">
            <p>
                <b>
                    {name}
                </b>
            </p>
            <p>
                <b>
                    {price} TL
                </b>
            </p>
            <div className="countHandler">
            <button onClick={()=>removeFromCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=>updateCartItem(Number(e.target.value),id)}></input>
            <button onClick={()=>addCartItem(id)}>+</button>
        </div>
        </div>
    </div>
  )
}

export default CartItem