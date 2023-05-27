import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

export const ItemDetailContainer = () => {

    const db = getFirestore();
    const params = useParams()
    const { id } = params
    const [product, setProduct] = useState(null)

    //Lo siguiente si 
    useEffect(() => {

        const itemDB = doc(db, 'items', id)
        getDoc(itemDB)
            .then(doc => setProduct({ id: doc.id, ...doc.data() }))
    }, [])

    //const { url, titulo, stock, descripcion } = product

    return (
        <>
            {product ?
                <ItemDetail {...product} />
                :
                <h1>Loading...</h1>
            }
        </>
    )
};
