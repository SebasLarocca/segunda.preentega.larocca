import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import cartSvg from './Assets/cart.svg'


let cartLocalStorage = JSON.parse(localStorage.getItem('Cart'));

export const CartWidget = () => {
    const [cartCantidad, setCartCantidad] = useState(cartLocalStorage);
    
    return (
        <>
            <Link to={'/orders'} ><img src={cartSvg} className="cart-icon" alt='producto' /></Link>
            <h4 className="cart-cantidad"></h4>
        </>
    )
}
