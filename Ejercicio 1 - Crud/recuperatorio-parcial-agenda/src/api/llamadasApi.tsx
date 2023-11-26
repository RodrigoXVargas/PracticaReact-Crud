import { FormData } from '../interfaces/FormData';


//GET CONTACTOS
export async function getAllContactos() {
    const urlServer = "http://168.194.207.98:8081/api_contacto/get_contactos.php";
    const response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    
    return await response.json();
}

//contacto por indice
export async function getContactoXIndice(indice: string) {
    const urlServer = "http://168.194.207.98:8081/api_contacto/get_contactos.php?indice=" + indice;
    const response = await fetch(urlServer, {
        method: 'GET',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    return await response.json();
}

//save or update
export async function saveOrUpdate(objeto: FormData) {
    if (objeto.id === undefined) return

    let urlServer: string = '';
    let methodM: string = "";
    if (objeto.id === 0) {
        urlServer = 'http://168.194.207.98:8081/api_contacto/post_contacto.php';
        methodM = "POST";
    } else {
        urlServer = 'http://168.194.207.98:8081/api_contacto/put_contacto.php';
        methodM = "PUT";
    }

    const response = await fetch(urlServer, {
        method: methodM,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objeto),

    });
    return await response.json();
}

//delete
export async function deleteById(id: number) {
    const urlServer = "http://168.194.207.98:8081/api_contacto/delete_contacto.php?id=" + id;
    const response = await fetch(urlServer, {
        method: 'DELETE',
        headers: {
            'Content-type': "application/json",
            'Access-Control-Allow-Origin': '*'
        },
        mode: 'cors'
    });
    return await response.json();
}







