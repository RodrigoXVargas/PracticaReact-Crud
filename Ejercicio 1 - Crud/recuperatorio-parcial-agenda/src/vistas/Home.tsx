import 'bootstrap/dist/css/bootstrap.min.css';
import { Contacto } from '../interfaces/Contacto';
import { useEffect, useState } from 'react';
import { getContactoXIndice } from '../api/llamadasApi';

function Home() {
    const [contactos, setContactos] = useState<Contacto[]>([])

    

    async function getcontactosFiltrados(indice: string) {
        const datos: Contacto[] = await getContactoXIndice(indice);
        setContactos(datos);
    }

    useEffect(() => {
        getcontactosFiltrados('a')
    }, [])

    return (
        <>
            <div className="container">
                <div className="grid-container">
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("a")}>A</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("c")}>C</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("b")}>B</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("d")}>D</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("e")}>E</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("f")}>F</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("g")}>G</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("h")}>H</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("i")}>I</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("j")}>J</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("k")}>K</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("l")}>L</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("m")}>M</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("n")}>N</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("ñ")}>Ñ</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("o")}>O</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("p")}>P</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("q")}>Q</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("r")}>R</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("s")}>S</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("t")}>T</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("u")}>U</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("v")}>V</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("w")}>W</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("x")}>X</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("y")}>Y</button></div>
                    <div className="grid-item"><button className="boton" onClick={() => getcontactosFiltrados("z")}>Z</button></div>
                </div>

                <table className="table table-dark table-hover" >
                    <thead>
                        <tr>
                            <td>Foto</td>
                            <td>Apellido</td>
                            <td>Nombre</td>
                            <td>Telefono</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {contactos.map((contacto: Contacto) => (
                            <tr>
                                <td>
                                    <img className='imagen-tabla' src={contacto.fotourl} alt={contacto.nombre + " " + contacto.apellido} />
                                </td>
                                <td>{contacto.apellido}</td>
                                <td>{contacto.nombre}</td>
                                <td>{contacto.telefono}</td>
                                <td>{contacto.email}</td>

                            </tr>
                        ))

                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home
