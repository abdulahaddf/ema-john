import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../../fakeData/fakedb";
import Cart from "../../Cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //Step 1: Get ID
    for (const id in storedCart) {
      //Step 2: Get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //Step 3: Get the quantity of the product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //Step:4 save the saved product to the saved cart
        savedCart.push(addedProduct);
      }
    }
    //Step five : set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
