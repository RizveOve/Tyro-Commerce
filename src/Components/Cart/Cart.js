import React from 'react';
import './Cart.css';

const Cart = (props) => {
    
    const cart= props.cart; 

    let totalPrice= 0;
    let Shipping= 0;
    cart.forEach(element => {
        totalPrice= totalPrice+ element.price;
        if(element.price<50){
            Shipping= 9.99;
        }else if(element.price<100){
            Shipping= 4.99;
        }else{
            Shipping= 0;
        }
    });

    let tax= totalPrice* 0.075;
    let formatedTax= parseFloat(tax.toFixed(2));

   
    return (
        <div className='cart'>
            <h3>Cart Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <h5>Products price: {totalPrice}</h5>
            <h5>Shipping Charge: {Shipping}</h5>
            <h5>Tax: {formatedTax}</h5>
            <h5 className='gt'>Grand Total: {totalPrice+ Shipping + formatedTax}</h5>
        </div>
    );
};

export default Cart;