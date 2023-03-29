import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const product of cart){    
        total = total + product.price;
    }
    // console.log(total);
    return (
        <div className='cart'>
             <h3> Order Summery </h3>
             <p>Selected Item: {cart.length}</p>
             <p>Total Price: ${total}</p>
             <p>Total Shipping Charge: ${cart.length}</p>
             <p>Tax: ${cart.length}</p>
             <h6>Grand Total: </h6>
             

        </div>
    );
};

export default Cart;