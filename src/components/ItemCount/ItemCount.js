import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/UseContext';

export const ItemCount = ({ inicial, stock, id, titulo, precio }) => {

    const [cantidad, setCantidad] = useState(inicial)
    
    const sumaItem = () => {
        stock > cantidad && setCantidad(cantidad + 1)
    };

    const agregaItem = () => {

        //trae el JSON del local transformado a objeto
        let cartLocalStorage = JSON.parse(localStorage.getItem('Cart'));

        //primera condición: si no existe carrito alguno al momento
        if (!cartLocalStorage) {

            localStorage.setItem('Cart', JSON.stringify({ //transforma a JSON que es un string
                items:
                    [{
                        [id]:
                        {
                            titulo: titulo,
                            cantidad: cantidad,
                            precioUnitario: precio
                        }
                    }]
                ,
                cantidadTotal: cantidad,
                precioTotal: precio * cantidad
            }))
            
        }


        else {
            const cartExistente = cartLocalStorage;
            const found = cartExistente.items.find(element =>
                Object.keys(element)[0] === id
            );

            //segunda condición: existe carrito y hay ya una cantidad del producto seleccionado:
            if (found) {
                console.log('Lo encontró')
                const index = cartExistente.items.indexOf(found)
                console.log(index)

                found[id].cantidad = found[id].cantidad + cantidad
                cartExistente.items[index] = found
                cartExistente.cantidadTotal = cartExistente.cantidadTotal + cantidad
                cartExistente.precioTotal = cartExistente.precioTotal + (precio * cantidad)
                localStorage.setItem('Cart', JSON.stringify(cartExistente));
            }

            //tercera condición por descarte: existe el carrito pero no había previamente en el del producto seleccionado
            else {
                console.log('No encontró nada')
                const nuevoItem = {
                    titulo: titulo,
                    cantidad: cantidad,
                    precioUnitario: precio
                }
                cartExistente.items.push({ [id]: nuevoItem })
                cartExistente.cantidadTotal = cartExistente.cantidadTotal + cantidad
                cartExistente.precioTotal = cartExistente.precioTotal + (precio * cantidad)
                localStorage.setItem('Cart', JSON.stringify(cartExistente));
            }
        }
        console.log(JSON.parse(localStorage.getItem('Cart')))
       
    };

    const restaItem = () => {
        cantidad > 0 && setCantidad(cantidad - 1);
    };

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
