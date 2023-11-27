import { ChangeEvent } from "react"
import { useGetProductById } from "../customHooks/useGetProudctId"
import { saveOrUpdate } from "../api/llamadasApi"
import { useGetAllCategorias } from "../customHooks/useGetAllCategorias"
import { useParams } from "react-router-dom"


function FormCrudView() {
    const { id } = useParams()
    const { categorias } = useGetAllCategorias()
    const { producto, setProducto } = useGetProductById(id)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setProducto((prevProducto) => ({
            ...prevProducto,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        saveOrUpdate(producto)
            .then((response) => {
                console.log(response)
                alert('Producto Guardado')

            })
            .catch((error) => {
                console.log(error)
                alert('Error al guardar el Producto: ' + error)
            })
    }

    return (
        <>
            <div>
                <button className="btn btn-primary" onClick={() => window.location.href = 'http://localhost:5173/crud'}>Volver</button>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Id</label>
                    <input type="text" name="id" value={producto.id} onChange={handleChange} disabled />

                    <label htmlFor="">Nombre</label>
                    <input type="text" name="title" value={producto.title} onChange={handleChange} />

                    <label htmlFor="">Precio</label>
                    <input type="text" name="price" value={producto.price} onChange={handleChange} />

                    <label htmlFor="">Descripcion</label>
                    <input type="text" name="description" value={producto.description} onChange={handleChange} />

                    <label htmlFor="">Categoria</label>
                    <select value={producto.category} name="category" onChange={handleChange}>
                        <option value="nada">Seleccione una categoria</option>
                        {categorias.map((categoria: string) => (
                            <option key={categoria} value={categoria}>{categoria}</option>
                        ))}
                    </select>

                    <label htmlFor="">Imagen Url</label>
                    <input type="text" name="image" value={producto.image} onChange={handleChange} />

                    <button type="submit" className="btn btn-secondary">Guardar</button>
                </form>
            </div>
        </>
    )
}


export default FormCrudView