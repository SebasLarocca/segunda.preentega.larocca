import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Item } from '../Item/Item'

export const ItemList = ({ products }) => {
    
    return (
        <div className='d-flex flex-wrap'>
            {products.map(prod => <Item {...prod} key={prod.id} />)}
        </div>
    )
}