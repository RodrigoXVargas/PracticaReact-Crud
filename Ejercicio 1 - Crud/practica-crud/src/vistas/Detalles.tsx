import { useParams } from "react-router-dom"
import { useGetAllCategorias } from "../customHooks/useGetAllCategorias"
import { useGetProductById } from "../customHooks/useGetProudctId"

function Detalles() {
    const { id } = useParams()
    const { producto } = useGetProductById(id)
    const { categorias } = useGetAllCategorias()


    return (
        <>
            <div>
                <button className="btn btn-primary" onClick={() => window.location.href = 'http://localhost:5173/crud'}>Volver</button>
                <label htmlFor="">Id</label>
                <input type="text" name="id" value={producto.id} disabled />

                <label htmlFor="">Nombre</label>
                <input type="text" name="title" value={producto.title} />

                <label htmlFor="">Precio</label>
                <input type="text" name="price" value={producto.price} />

                <label htmlFor="">Descripcion</label>
                <input type="text" name="description" value={producto.description} />

                <label htmlFor="">Categoria</label>
                <select value={producto.category} name="category" >
                    <option value="nada">Seleccione una categoria</option>
                    {categorias.map((categoria: string) => (
                        <option key={categoria} value={categoria}>{categoria}</option>
                    ))}
                </select>

                <label htmlFor="">Imagen Url</label>
                <input type="text" name="image" value={producto.image} />

                <label htmlFor="">Rating rate</label>
                <input type="text" name="rating.rate" value={producto.rating.rate} />

                <label htmlFor="">Rating count</label>
                <input type="text" name="rating.count" value={producto.rating.count} />

            </div>
        </>
    )
}


export default Detalles