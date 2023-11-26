import { useEffect, useState } from "react"
import { Contacto } from "../interfaces/Contacto"
import { deleteById, getAllContactos } from "../api/llamadasApi"

function Crud() {
  const [contactos, setContactos] = useState<Contacto[]>([])

  const obtenerContactos = async () => {
    const datos : Contacto[] = await getAllContactos()
    setContactos(datos)
  }

  const handleDelete = async (id: number) => {
    deleteById(id)
    .then((response) => {
      console.log(response)
      alert('Contacto eliminado')
      obtenerContactos()
    })
    .catch((error) => {
      console.log(error)
      alert('Error al eliminar el contacto')
    })
  }

  useEffect(() => {
    obtenerContactos()
  }, [])

  return (
    <>
      <div>
        <button className="btn btn-primary" onClick={() => window.location.href = `http://localhost:5173/crud/0`}>Nuevo Contacto</button>
        <table className="table table-dark table-hover" >
          <thead>
            <tr>
              <td>id</td>
              <td>nombre</td>
              <td>apellido</td>
              <td>telefono</td>
              <td>email</td>
              <td>foto</td>
              <td>botones</td>
            </tr>
          </thead>
          <tbody>
            {contactos.map( (contacto: Contacto)  => (
              <tr key={contacto.id}>
                <td>{contacto.id}</td>
                <td>{contacto.nombre}</td>
                <td>{contacto.apellido}</td>
                <td>{contacto.telefono}</td>
                <td>{contacto.email}</td>
                <td>
                  <img src={contacto.fotourl} alt={contacto.nombre + " "+ contacto.apellido} />
                </td>
                <td>
                  <button className="btn btn-warning" onClick={() => window.location.href = `http://localhost:5173/crud/${contacto.id}`}>Editar</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(contacto.id)}>Eliminar</button>
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