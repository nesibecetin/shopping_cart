import React ,{ useContext } from 'react'
import { ShopContext} from '../../context/ShopContext'

const Product = (props) => {

const {id,name,price,image} = props.data;
const { addCartItem , cartItems } = useContext(ShopContext); 
const cartItemsAmount  = cartItems[id];

  return (
    <div className="product">
        <img src={image} alt="" />
        <div className="description">
            <b>
                <p>{name}</p>
            </b>
            <b>
                <p>{price} TL</p>
            </b>       
        </div>
        <button className='addToCartBttn' onClick={()=> (addCartItem(id))} >Add Cart {cartItemsAmount > 0 && <>{cartItemsAmount}</> }</button>
    </div>
  )
}

export default Product