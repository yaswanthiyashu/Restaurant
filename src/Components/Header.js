import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Items from "./Items";
import Cart from "./Cart";

import items from "./items.json";

function Header() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const clickVeg = () => {
    let originalItems = items.filter((item) => item.type === "veg");
    setData(originalItems);
  };

  const clickNonVeg = () => {
    let originalItems = items.filter((item) => item.type === "Non-veg");
    setData(originalItems);
  };

  const handleClickItem = (item) => {
    let cartItems = cart;
    let index = cartItems.findIndex((cart) => cart.name === item.name);
    if (index > -1) {
      cartItems[index].quantity = cartItems[index].quantity + 1;
      setCart(cartItems);
    } else {
      setCart([...cart, item]);
    }
  };

  const decrement = (index) => {
    let cartItems = cart;
    if (cartItems[index].quantity === 1) {
      cartItems.splice(index, 1);
      setCart(cartItems);
    } else {
      cartItems[index].quantity = cartItems[index].quantity - 1;
      setCart(cartItems);
    }
  };

  const increment = (index) => {
    let cartItems = cart;
    cartItems[index].quantity = cartItems[index].quantity + 1;
    setCart(cartItems);
  };

  const remove = (index) => {
    let cartItems = cart;
    cartItems[index].quantity = 1;
    cartItems.splice(index, 1);
    setCart(cartItems);
  };

  const changeInput = (e, index) => {
    if (e.target.value != "0") {
      let cartItems = cart;
      cartItems[index].quantity = Number(e.target.value);
      setCart(cartItems);
    }
  };

  return (
    <>
      <div className="navbar">
        <h2>అమ్మ చేతి వంట</h2>
        <div className="header">
          <h6>Signup</h6>
          <h6>Login</h6>
        </div>
      </div>
      <div className="rows">
        <Menu clickVeg={clickVeg} clickNonVeg={clickNonVeg} />
        <Items items={data} handleClickItem={handleClickItem} />
        <Cart
          items={cart}
          decrement={decrement}
          increment={increment}
          remove={remove}
          changeInput={changeInput}
        />
      </div>
    </>
  );
}

export default Header;
