import { ChangeEvent, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Contacto } from "../interfaces/Contacto"
import { FormData } from "../interfaces/FormData";
import { getAllContactos, saveOrUpdate } from "../api/llamadasApi";

function CrudForm() {
    const { id } = useParams()
    const [formData, setFormData] = useState<FormData>({
        id: 0,
        apellido: "",
        nombre: "",
        telefono: 0,
        email: "",
        fotourl: "",
    })


    const buscarContacto = async () => {
        const datos: Contacto[] = await getAllContactos()

        if (id === undefined || id === '0') {
            return
        }
        const contactoBuscado = datos.find((contacto: Contacto) => contacto.id == parseInt(id))
        if(contactoBuscado) {
            console.log(contactoBuscado?.id)
            setFormData(contactoBuscado)
        }
    }

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault() 
        saveOrUpdate(formData)
        .then((response) => {
            console.log(response)
            alert('Contacto Guardado')
            window.location.href = 'http://localhost:5173/crud'
        })
        .catch((error) => {
            alert('Hubo un error en el guardado del contacto')
            console.log(error)
        })
    }


    useEffect(() => {
        buscarContacto()
    }, [])
    return (
        <>
            <div className="container-Form">
                <form className= "form-crud" action="" onSubmit={handleSubmit}>
                    <label className="label-Crud" htmlFor="">ID</label>
                    <input className="input-Crud" type="number" name="id" value={formData.id} onChange={handleChange} disabled/>

                    <label className="label-Crud" htmlFor="">Nombre</label>
                    <input className="input-Crud" type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>

                    <label className="label-Crud" htmlFor="">Apellido</label>
                    <input className="input-Crud" type="text" name="apellido" value={formData.apellido} onChange={handleChange}/>

                    <label className="label-Crud" htmlFor="">Telefono</label>
                    <input className="input-Crud" type="number" name="telefono" value={formData.telefono} onChange={handleChange}/>

                    <label className="label-Crud" htmlFor="">Email</label>
                    <input className="input-Crud" type="email" name="email" value={formData.email} onChange={handleChange}/>

                    <label className="label-Crud" htmlFor="">Foto Url</label>
                    <input className="input-Crud" type="text" name="fotourl" value={formData.fotourl} onChange={handleChange}/>

                    <button className="btn btn-secondary">Guardar</button>
                </form>
            </div>
        </>
    )
}

export default CrudForm