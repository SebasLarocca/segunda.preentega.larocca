import { ItemCount } from '../ItemCount/ItemCount'
import React from 'react'
import { CartContext } from '../context/UseContext'


export const ItemDetail = ({ url, descripcion, titulo, stock, id, precio }) => {
   
   
    return (
        <div className="card-detail">
            <img src={url} className="card-img-top" alt='producto' />
            <div class="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-title">{descripcion}</p>
                
                <ItemCount stock={stock} inicial={0} id={id} titulo= {titulo} precio={precio} />
            </div>
        </div>
    )
}