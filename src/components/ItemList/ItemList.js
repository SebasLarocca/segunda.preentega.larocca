import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Item } from '../Item/Item'
import { Link } from 'react-router-dom'

export const ItemList = ({ products }) => {
    
    return (
        <>
        <Link to={'/random'}>Apretame</Link>
        <div className='d-flex flex-wrap'>
            {products.map(prod => <Item {...prod} key={prod.id} />)}
        </div>
        </>
    )
}