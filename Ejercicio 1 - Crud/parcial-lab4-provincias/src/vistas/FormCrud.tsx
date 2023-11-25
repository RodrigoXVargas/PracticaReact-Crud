import { ChangeEvent, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOneProvincia, saveProvincia } from "../api/llamadasApi"
import { Provincia } from "../interfaces/Provincia"



interface FormData {
    id?: number;
    nombre: string;
    capital: string;
    poblacion: number;
    superficie: number;
    nroDepartamentos: number;
    abreviatura: string;
    bandera: string;
}

function FormCrud() {
    const { id } = useParams()
    const [formdata, setFormData] = useState<FormData>({
        id: 0,
        nombre: "",
        capital: "",
        poblacion: 0,
        superficie: 0,
        nroDepartamentos: 0,
        abreviatura: "",
        bandera: ""
    })

    const getProvincia = async () => {
        if (id === undefined || id === '0') {
            return
        }
        const datos: FormData = await getOneProvincia(id)
        setFormData(datos)
    }

    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const provincia: Provincia = {
            id: formdata.id ?? 0,
            nombre: formdata.nombre,
            capital: formdata.capital,
            poblacion: formdata.poblacion,
            superficie: formdata.superficie,
            nroDepartamentos: formdata.nroDepartamentos,
            abreviatura: formdata.abreviatura,
            bandera: formdata.bandera,
        }
        console.log(provincia)
        saveProvincia(provincia)
            .then((response) => {
                console.log(response)
                if (!response.rta.includes('OK')) {
                    e.preventDefault()
                    alert('Ocurrio un error, Reintente')
                } else {
                    window.location.href = 'http://localhost:5173/'
                }
            })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    useEffect(() => {
        getProvincia()
    }, [])



    return (
        <>
            <button className="btn btn-primary" onClick={() => window.location.href = "http://localhost:5173/"}>Volver</button>
            <div className="crud_form">
                <form action="" className="formFormCrud" onSubmit={handleOnSubmit}>
                    <label className="labelFormCrud" htmlFor="">Id Provincia</label>
                    <input className="inputFormCrud" type="text" name="id" value={formdata.id} onChange={handleChange} disabled />
                    <label className="labelFormCrud" htmlFor="">nombre</label>
                    <input className="inputFormCrud" type="text" name="nombre" value={formdata.nombre} onChange={handleChange} />
                    <label className="labelFormCrud" htmlFor="">capital</label>
                    <input className="inputFormCrud" type="text" name="capital" value={formdata.capital} onChange={handleChange} />
                    <label className="labelFormCrud" htmlFor="">poblacion</label>
                    <input className="inputFormCrud" type="number" name="poblacion" value={formdata.poblacion} onChange={handleChange} />
                    <label className="labelFormCrud" htmlFor="">superficie</label>
                    <input className="inputFormCrud" type="number" name="superficie" value={formdata.superficie} onChange={handleChange} />
                    <label className="labelFormCrud" htmlFor="">nroDepartamentos</label>
                    <input className="inputFormCrud" type="number" name="nroDepartamentos" value={formdata.nroDepartamentos} onChange={handleChange} />
                    <label className="labelFormCrud" htmlFor="">abreviatura</label>
                    <input className="inputFormCrud" type="text" name="abreviatura" value={formdata.abreviatura} onChange={handleChange} />
                    <label className="labelFormCrud" htmlFor="">bandera</label>
                    <input className="inputFormCrud" type="text" name="bandera" value={formdata.bandera} onChange={handleChange} />
                    <button className="btn btn-success" type="submit">Save</button>
                </form>
            </div>
        </>
    )
}

export default FormCrud