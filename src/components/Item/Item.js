import React from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import './Item.css'
import { Link, useParams } from 'react-router-dom'

export const Item = ({ url, titulo, id }) => {
    return (
        <div>
            <div className="card">
                <img src={url} className="card-img-top" alt='producto' />
                <div class="card-body">
                    <h5 className="card-title">{titulo}</h5>
                </div>
                <button className='btn btn-secondary'><Link to={`/item/${id}`}>Ver detalle</Link></button>
            </div>
        </div>
    )
}





            