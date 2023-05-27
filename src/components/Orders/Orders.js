import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Orders = () => {

    let cartLocalStorage = JSON.parse(localStorage.getItem('Cart'));
    const { cantidadTotal, items, precioTotal } = cartLocalStorage

    const lista = ['perro', 'gato', 'vaca']

    /*
    items.forEach(element => {
        console.log(Object.values(element)[0].cantidad)
        console.log(Object.values(element)[0].titulo)
        console.log(Object.values(element)[0].precioUnitario)
    });
    */
    const handleCheckOut = () => { };
    const handleVolver = () => { };

    const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e)=>{
        setInputValue(e.target.value)
        console.log(inputValue);
      }
    return (
        <>
        <div className='m-4 d-flex flex-column'>
        <p>Tu carrito al momento:</p>
            {
                items.map((element) =>          
                    <p>{Object.values(element)[0].cantidad} {Object.values(element)[0].titulo}</p>
                )
            }
            
            <p>Precio total: $ {precioTotal}</p>
            <p>Cantidad total de items: {cantidadTotal}</p>
            <form className='d-flex flex-column'>
            <input onChange= {(e)=>{ handleInputChange(e)}} type='text' placeholder='Nombre y apellido' />
            <input onChange= {(e)=>{ handleInputChange(e)}} type='text' placeholder='Telefono' />
            <input onChange= {(e)=>{ handleInputChange(e)}} type='text' placeholder='Mail' />
            <input onChange= {(e)=>{ handleInputChange(e)}} type='text' placeholder='Confirma mail' />
            <button className='btn btn-primary ms-3 mt-3' onClick={handleCheckOut}>Checkout - Crear orden</button>
            </form>
            <div>
            
            <button className='btn btn-primary mt-3 ms-3'><Link to={'/'}>Volver</Link></button>
            </div>
            </div>
        </>
    )
}

