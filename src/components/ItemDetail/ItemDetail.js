
import { ItemCount } from '../ItemCount/ItemCount'
import React from 'react'

export const ItemDetail = ({url, descripcion, titulo, stock}) => {

    return (
       <>
        
        <div className="card-detail">
            <img src={url} className="card-img-top" alt='producto' />
            <div class="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-title">{descripcion}</p>
                <ItemCount stock={stock} inicial={0} />
            </div>
        </div>
       </>
    )
}

/*
 
 */