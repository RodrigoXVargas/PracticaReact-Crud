import { ChangeEvent, useState } from "react"
import { useGetAllCategorias } from "../customHooks/useGetAllCategorias"
import { Producto } from "../interfaces/Producto"
import { getProductById, getProductsByCategoria } from "../api/llamadasApi"
import CardProducto from "../componentes/CardProducto"


function Home() {
    const { categorias } = useGetAllCategorias()
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('')
    const [productos, setProductos] = useState<Producto[]>([])
    const [productoSeleccionado, setProductoSeleccionado] = useState(0)
    const [producto, setProducto] = useState<Producto>()

    const handleCategoria = async (e: ChangeEvent<HTMLSelectElement>) => {
        setProductoSeleccionado(0)
        setCategoriaSeleccionada(e.target.value)
        if (e.target.value === '') return
        const datos: Producto[] = await getProductsByCategoria(e.target.value)
        setProductos(datos)
    }

    const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
        setProductoSeleccionado(parseInt(e.target.value))
        if (e.target.value === '' ) return
        const datos : Producto = await getProductById(parseInt(e.target.value))
        setProducto(datos)
    }

    

    return (
        <>
            <div>
                <select value={categoriaSeleccionada} onChange={handleCategoria}>
                    <option value="">Seleccione una categoria</option>
                    {categorias.map((categoria: string) => (
                        <option key={categoria} value={categoria}>{categoria}</option>
                    ))}
                </select>
            </div>
            <div>
                {categoriaSeleccionada &&
                    <select value={productoSeleccionado} onChange={handleChange}>
                        <option value="">Seleccione un producto</option>
                        {productos.map((producto: Producto) => (
                            <option key={producto.id} value={producto.id}>{producto.title}</option>
                        ))}
                    </select>
                }
            </div>

            {productoSeleccionado && <CardProducto producto={producto} />}
        </>
    )
}


export default Home