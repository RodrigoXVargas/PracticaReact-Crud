import { useEffect, useState } from "react"
import { getAllCategories } from "../api/llamadasApi"



export const useGetAllCategorias = () => {
    const [categorias, setCategorias] = useState<string[]>([])

    const obtenerCategorias = async () => {
        const datos: string[] = await getAllCategories()
        setCategorias(datos)
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    return {categorias}
}