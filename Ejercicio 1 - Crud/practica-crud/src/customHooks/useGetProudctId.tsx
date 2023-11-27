import { useCallback, useEffect, useState } from "react"
import { Producto } from "../interfaces/Producto"
import { getProductById } from "../api/llamadasApi"


export const useGetProductById = (id: string | undefined = '0') => {

    const [producto, setProducto] = useState<Producto>({
        id: 0,
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
            rate: 0,
            count: 0
        }
    })

    const obtenerProductos = useCallback(async () => {
        if (id === undefined || id === '0') return
        const datos: Producto = await getProductById(parseInt(id))
        setProducto(datos)
    }, [id])


    useEffect(() => {
        obtenerProductos()
    }, [obtenerProductos])

    return { producto, setProducto }

} 