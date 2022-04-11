import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    
    const first10= fakeData.slice(0,10);
    // const [product, setProduct]= useState(first10);

    const[cart, setCart]= useState([]);
    const handleCartBtn = (product)=> {
        const newCart= [...cart, product]
        setCart(newCart);
        
    }
    
    return (
        <div className='shop-section'>
            <div className='product-section'>
                {
                    first10.map(product=> <Product handleCartBtn= {handleCartBtn} product= {product}></Product>)
                }
            </div>
            <div className='cart-section'>
                <Cart cart= {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;