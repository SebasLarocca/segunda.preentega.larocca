import React from 'react'
import cartSvg from './Assets/cart.svg'

export const CartWidget = ({cart}) => {
    return (
        <>
            <img src={cartSvg} className="cart-icon" alt='producto'/>
            <h4 className="cart-cantidad">{cart}</h4>
        </>
    )
}
