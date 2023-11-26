import { useState, useEffect } from 'react'
import { Costume } from '../interfaces/Costume'
import { deleteCostume, getAll } from '../utils/api/apiCostume'
import 'bootstrap/dist/css/bootstrap.min.css';


function Crud() {
  const [costumes, setCostumes] = useState<Costume[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [rango, setRango] = useState(10000)

  const removeCostume = async (id: string) => {
    if (confirm('¿Estas seguro que deseas eliminarlo?')) {
      const datoEliminado: Costume = await deleteCostume(id);
      alert("Se ha eliminado el registro: \n" + datoEliminado.name)
    }
    getCostumes()
  }

  async function getCostumes() {
    const datos: Costume[] = await getAll();
    setCostumes(datos);
  }

  const filteredCostumes = costumes.filter(costume => {
    return (
      (costume.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        costume.category.toLowerCase().includes(searchTerm.toLowerCase())) &&
      costume.price < rango
    )
  })

  useEffect(() => {
    getCostumes();
  }, [])



  return (
    <>
      <section className='Crud'>
        <h2 className='titulo'>Crud de Costumes</h2>
        <input className='' onChange={(e) => setSearchTerm(e.target.value)} placeholder='Seach' type="text" />
        <button type="button" className='btn btn-primary' onClick={() => window.location.href = `http://localhost:5173/crud/0`}>New Costume</button>
        <input type='range' max={10000} defaultValue={rango} onChange={(e) => setRango(parseInt(e.target.value))} />
        <label>{rango}</label>
        <table className="table table-dark table-striped">
          <thead >
            <tr >
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Details</th>
              <th>Discharge Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredCostumes.map((costume: Costume) => (
              <tr key={costume.id}>

                <td>{costume.name}</td>
                <td>{costume.price}</td>
                <td>{costume.category}</td>
                <td>{costume.details}</td>
                <td>{costume.dischargeDate}</td>

                <td>
                  <button type="button" className="btn btn-warning" onClick={() => window.location.href = `http://localhost:5173/crud/${costume.id}`}>Editar</button>
                  <button type="button" className="btn btn-danger" onClick={() => removeCostume(costume.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Crud
