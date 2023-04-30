import './ItemListContainer.css'

export const ItemListContainer = ({url, titulo, descripcion, textoBotonResta, textoBotonSuma, sumaItemCarrito, restaItemCarrito}) => {
    
    return (
        <>
            <div className="card">
                <img src={url} className="card-img-top" alt='producto'/>
                <div class="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <a onClick= {sumaItemCarrito} href="#" className="btn btn-custom">{textoBotonSuma}</a>
                    <a onClick= {restaItemCarrito} href="#" className="btn btn-custom ms-3">{textoBotonResta}</a>
                </div>
            </div>
        </>
    )
}
