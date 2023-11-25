import { Provincia } from "../interfaces/Provincia"


export async function getAllProvincias() {
    try {
        const urlServer = `http://168.194.207.98:8081/api_provincia/get_provincias.php`
        const response = await fetch(urlServer, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow': '*',
            },
            mode: 'cors'
        })
        if (!response.ok) {
            throw new Error('Hubo un error en el response, no da ok')
        } else {
            return await response.json()
        }
    } catch (error) {
        console.log("Error en el fetch")
    }
}

export async function getOneProvincia(id: string) {
    try {
        const urlServer = `http://168.194.207.98:8081/api_provincia/get_provincia.php?id=${id}`
        const response = await fetch(urlServer, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow': '*',
            },
            mode: 'cors'
        })
        if (!response.ok) {
            throw new Error('Hubo un error en el response, no da ok')
        } else {
            return await response.json()
        }
    } catch (error) {
        console.log("Error en el fetch")
    }
}

export async function getAllProvinciasByNombre(nombre: string) {
    try {
        const urlServer = `http://168.194.207.98:8081/api_provincia/get_provincias.php?nombre=${nombre}`
        const response = await fetch(urlServer, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow': '*',
            },
            mode: 'cors'
        })
        if (!response.ok) {
            throw new Error('Hubo un error en el response, no da ok')
        } else {
            return await response.json()
        }
    } catch (error) {
        console.log("Error en el fetch")
    }
}

export async function saveProvincia(object: Provincia) {
    let method = ''
    try {
        if (object.id === 0) {
            method = 'POST'
        } else {
            method = 'PUT'
        }

        const urlServer = `http://168.194.207.98:8081/api_provincia/${method.toLocaleLowerCase()}_provincia.php`
        const response = await fetch(urlServer, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow': '*',
            },
            body: JSON.stringify(object),
            mode: 'cors'
        })
        if (!response.ok) {
            throw new Error('Hubo un error en el response, no da ok')
        } else {
            return await response.json()
        }
    } catch (error) {
        console.log("Error en el fetch")
    }
}

export async function deleteProvincia(id: number) {
    try {
        const urlServer = `http://168.194.207.98:8081/api_provincia/delete_provincia.php?id=${id}`
        const response = await fetch(urlServer, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow': '*',
            },
            mode: 'cors'
        })
        if (!response.ok) {
            throw new Error('Hubo un error en el response, no da ok')
        } else {
            return await response.json()
        }
    } catch (error) {
        console.log("Error en el fetch")
    }
}
