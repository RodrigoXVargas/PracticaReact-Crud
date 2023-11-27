import { CardProductoParametros } from "../interfaces/CardProductoParametros"

const CardProducto: React.FC<CardProductoParametros> = ( {producto} ) => {

    return (
        <>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={producto?.image} className="img-fluid rounded-start" alt={producto?.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{producto?.title}</h5>
                            <h6>$ {producto?.price}</h6>
                            <p className="card-text">{producto?.description}</p>
                            <p className="card-text">Rating: {producto?.rating.rate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
}


export default CardProducto