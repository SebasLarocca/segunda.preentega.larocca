import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { getProducts, getProductByCategory } from '../asyncMock';
import { useParams } from 'react-router-dom';

export const ItemContainer = (  ) => {

  const [products, setProducts] = useState([]);
  //const [params, setParams] = useState(false);
  const categorias = useParams()

  useEffect(()=>{
    categorias.id ? getProductByCategory(categorias.id).then(response => {setProducts(response)}).catch( err => console.log(err)) : getProducts().then( response => {setProducts(response)}).catch( err => console.log(err))
  })

  return (
    <>
      <ItemList products = {products}/>
    </>
  )
}