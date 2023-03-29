import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, shipping} = props;
    let total = 0;
    let totalShipping = 0;
    
    for (const product of cart){    
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = (total*5)/100;
    let grandTotal = total + totalShipping + tax;
    // console.log(total);
    return (
        <div className='cart'>
             <h3> Order Summery </h3>
             <p>Selected Item: {cart.length}</p>
             <p>Total Price: ${total}</p>
             <p>Total Shipping Charge: ${totalShipping}</p>
             <p>Tax: ${tax}</p>
             <h2>Grand Total:{grandTotal.toFixed(2)} </h2>
             

        </div>
    );
};

export default Cart;