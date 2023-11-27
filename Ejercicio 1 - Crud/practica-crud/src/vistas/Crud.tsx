import { Producto } from "../interfaces/Producto"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetAllProducts } from "../customHooks/useGetAllProducts";
import { deleteById } from "../api/llamadasApi";

function Crud() {
    const { productos } = useGetAllProducts()

    const handleDelete = async (id: number) => {
        if(confirm('¿Estas seguro de eliminar el registro?')) {
            const dato = await deleteById(id)
            console.log(dato)
            alert('El registro se eliminó correctamente')
        } 
    }

    return (
        <>
            <div>
            <button className="btn btn-primary" onClick={() => window.location.href = 'http://localhost:5173/crud/0'}>Nuevo Producto</button>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>title</td>
                            <td>Price</td>
                            <td>Category</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto: Producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.title}</td>
                                <td>{producto.price}</td>
                                <td>{producto.category}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={() => window.location.href = `http://localhost:5173/crud/${producto.id}`}>Editar</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(producto.id)}>Eliminar</button>
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