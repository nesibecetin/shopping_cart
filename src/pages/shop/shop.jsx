import React from 'react'
import product from '../../product'
import Product from './Product'
import './shop.css'

const shop = () => {
  return (
    <div className="shop">
        <div className="shop-title">
            <h1>Shop</h1>
        </div>
        <div className="products">
            {product.map((product)=>(
                <Product data={product}/>
            ))}
        </div>
    </div>
  )
}
export default shop