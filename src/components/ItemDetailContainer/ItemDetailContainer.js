import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const params = useParams()
    const {id} = params
    const [product, setProduct] = useState(null)

    useEffect(() => {

        getProductById(id)
            .then(response => {
                setProduct(response)
                
            })
            .catch((err) => { console.log(err); })
    },[])

   //const { url, titulo, stock, descripcion } = product

    return (
        <>
          <ItemDetail {...product}/>
        </>
    )
};
/*
  
*/