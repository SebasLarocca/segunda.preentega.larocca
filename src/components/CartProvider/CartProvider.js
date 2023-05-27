
import React, { useState } from 'react'
import { CartContext } from '../context/UseContext'

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        nombre: null,
        apellido: null
    })
    
    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}
