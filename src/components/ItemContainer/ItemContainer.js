import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
//import { getProducts, getProductByCategory } from '../asyncMock';
import { Link, useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore'

export const ItemContainer = () => {

  const [products, setProducts] = useState(null);
  const categorias = useParams()

  //Conexion con firebase y trae la colección completa o la colección filtrada según se haya seleccionado una categoría o no
  const db = getFirestore()

  useEffect(() => {
    const productsDB = collection(db, 'items');
    getDocs(productsDB)
      .then(productos => {
        if (!categorias.id) { setProducts(productos.docs.map(doc => ({ id: doc.id, ...doc.data() }))) }
        else {
          const filteredProducts = productos.docs.map(doc => ({ id: doc.id, ...doc.data() })).filter(prods => prods.categoria === categorias.id)
          setProducts(filteredProducts)
        }
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {products ?
       
        <ItemList products={products} />
        :
        <h1>Loading...</h1>}
    </>
  )
};

