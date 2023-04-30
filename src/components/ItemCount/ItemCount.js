import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export const ItemCount = ({inicial, stock}) => {
    
    const [cantidad, setCantidad] = useState(inicial)

    const sumaItem = () => { 
        stock > cantidad && setCantidad(cantidad + 1) };

    const agregaItem = () => { console.log(`Tenes ${cantidad} en el carrito`); };

    const restaItem = () => { 
        cantidad > 0 && setCantidad(cantidad - 1); };
    
    return (
        <>
            <div className='d-flex align-items-center flex-column'>
                <p>Cantidad seleccionada: <strong>{cantidad}</strong></p>
                <div>
                    <button onClick={sumaItem} className='btn btn-primary m-2'>+1</button>
                    <button onClick={agregaItem} className='btn btn-primary m-2'>Agregar al carrito</button>
                    <button onClick={restaItem} className='btn btn-primary m-2'>-1</button>
                </div>
                <button className='btn btn-primary m-2'><Link to={'/'}>Volver</Link></button>
            </div>
        </>
    )
}
