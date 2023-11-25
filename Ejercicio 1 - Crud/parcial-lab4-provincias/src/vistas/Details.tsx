import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneProvincia } from "../api/llamadasApi"
import { Provincia } from "../interfaces/Provincia"



function Details() {
    const { id } = useParams()
    const [provincia, setProncia] = useState<Provincia>()

    const getProvincia = async () => {
        if (id) {
            const datos: Provincia = await getOneProvincia(id)
            if (datos){
                setProncia(datos)
            } else {
                alert('No se encuenta la provincia')
                window.location.href = 'http://localhost:5173/'
                return
            }            
        } else {
            alert('No se encuenta la provincia')
            window.location.href = 'http://localhost:5173/'
            return
        }
    }

    useEffect(() => {
        getProvincia()
    }, [])



    return (
        <>
        <button className="btn btn-primary" onClick={() => window.location.href = "http://localhost:5173/"}>Volver</button>
            <div className="details_form">
                <label className="labelDetails" htmlFor="">Id Provincia</label>
                <input className="inputDetails" type="text" value={provincia?.id} disabled />
                <label className="labelDetails" htmlFor="">nombre</label>
                <input className="inputDetails" type="text" value={provincia?.nombre} disabled />
                <label className="labelDetails" htmlFor="">capital</label>
                <input className="inputDetails" type="text" value={provincia?.capital} disabled />
                <label className="labelDetails" htmlFor="">poblacion</label>
                <input className="inputDetails" type="text" value={provincia?.poblacion} disabled />
                <label className="labelDetails" htmlFor="">superficie</label>
                <input className="inputDetails" type="text" value={provincia?.superficie} disabled />
                <label className="labelDetails" htmlFor="">nroDepartamentos</label>
                <input className="inputDetails" type="text" value={provincia?.nroDepartamentos} disabled />
                <label className="labelDetails" htmlFor="">abreviatura</label>
                <input className="inputDetails" type="text" value={provincia?.abreviatura} disabled />
                <label className="labelDetails" htmlFor="">bandera</label>
                <img className="inputDetails" src={provincia?.bandera} alt={provincia?.nombre} />
            </div>
        </>
    )
}

export default Details