import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const products= props.product;
    
    return (
        <div className='product'>
            <div>
                <img src={products.img} alt="" />
            </div>
            <div className='product-description'>
                <h4>{products.name}</h4>
                <h5>Made by: {products.seller}</h5>
                <h5>${products.price}</h5>
                <button onClick={()=> props.handleCartBtn(products)} className='cart-btn'>add to cart</button>
            </div>
        </div>
    );
};

export default Product;