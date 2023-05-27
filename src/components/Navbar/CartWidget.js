import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import cartSvg from './Assets/cart.svg'


let cartLocalStorage = JSON.parse(localStorage.getItem('Cart'));

export const CartWidget = () => {
    const [cartCantidad, setCartCantidad] = useState(cartLocalStorage);
    
    return (
        <>
            <a href={'/orders'} ><img src={cartSvg} className="cart-icon" alt='producto' /></a>
            <h4 className="cart-cantidad"></h4>
        </>
    )
}

