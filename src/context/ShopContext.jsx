import React,{createContext,useState} from 'react'
import Product from '../product';

export const ShopContext = createContext(null);

const getDefaultCartItem =()=>{
    let cart={};
    for (let i=1;i<Product.length;i++){
        cart[i]=0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCartItem());
   
    const addCartItem = (itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}));
    }
    const updateCartItem=( newAmount ,itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:newAmount}));
    }
    const contextValue ={cartItems,addCartItem,removeFromCart , updateCartItem};
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

export default ShopContext