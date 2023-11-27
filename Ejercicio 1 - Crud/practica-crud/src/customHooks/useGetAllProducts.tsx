import { useEffect, useState } from "react"
import { Producto } from "../interfaces/Producto"
import { getAllProductos } from "../api/llamadasApi"


export const useGetAllProducts = () => {
    const [productos, setProductos] = useState<Producto[]>([])

    const obtenerProductos = async () => {
        const datos: Producto[] = await getAllProductos()
        setProductos(datos)
    }

    useEffect(() => {
        obtenerProductos()
    }, [])

    return {productos}
}