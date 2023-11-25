import { useState, useEffect } from "react"
import { Provincia } from "../interfaces/Provincia"
import { deleteProvincia, getAllProvincias, getAllProvinciasByNombre } from "../api/llamadasApi"

function Crud(){
    const [provincias, setProvincias] = useState<Provincia[]>([])

    const getAllProv = async () => {
        const datos: Provincia[] = await getAllProvincias()
        setProvincias(datos)
    }

    const handleChangeSearch = async (nombre: string) => {

        const provinciasFiltradas = await getAllProvinciasByNombre(nombre)
        setProvincias(provinciasFiltradas)
    }

    const handleDelete = async (id: number) => {
        await deleteProvincia(id)
        getAllProv()
    }


    useEffect(()=>{
        getAllProv()
    }, [])

    return(
        <>
            <div>
                <button className="btn btn-primary" onClick={() => window.location.href = `http://localhost:5173/crud/0`}>Nueva Provincia</button>
                <input type="text" onChange={(e) => handleChangeSearch(e.target.value)}/>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <td>Provincia</td>
                            <td>Abreviatura</td>
                            <td>Bandera</td>
                            <td >Botones</td>
                        </tr>
                    </thead>
                    <tbody>
                        {provincias.map((provincia: Provincia) =>(
                            <tr key={provincia.id} >
                                <td>{provincia.nombre}</td>
                                <td>{provincia.abreviatura}</td>
                                <td>{provincia.bandera}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => window.location.href = `http://localhost:5173/details/${provincia.id}`}>Detalles</button>
                                    <button className="btn btn-warning" onClick={() => window.location.href = `http://localhost:5173/crud/${provincia.id}`}>Editar</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(provincia.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Crud