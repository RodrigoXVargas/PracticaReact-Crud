import { Producto } from "../interfaces/Producto";

const urlServer = 'https://fakestoreapi.com/products'

export async function getAllProductos() {
    const response = await fetch(urlServer)
        .then(res => res.json())
        .then(json => { return json })
        .catch((error) => console.log(error))
    return response
}

export async function getProductById(idProducto: number) {
    const urlServerGetOne = urlServer + '/' + idProducto;
    const response = await fetch(urlServerGetOne)
        .then(res => res.json())
        .then(json => { return json })
        .catch((error) => console.log(error))
    return response
}


export async function getAllCategories() {
    const response = await fetch(urlServer + '/categories')
        .then(res => res.json())
        .then(json => { return json })
        .catch((error) => console.log(error))
    return response
}

export async function getProductsByCategoria(nombreCategoria: string) {
    const response = await fetch(urlServer + `/category/${nombreCategoria}`)
        .then(res => res.json())
        .then(json => { return json })
        .catch((error) => console.log(error))
    return response
}



//save or update
export async function saveOrUpdate(objeto: Producto) {
    if (objeto.id === undefined) return
    let url
    let methodM: string = "";
    if (objeto.id === 0) {
        methodM = "POST";
        url = urlServer
    } else {
        url = urlServer + '/' + objeto.id
        methodM = "PUT";
    }

    const response = await fetch(url, {
        method: methodM,
        body: JSON.stringify(objeto)
    })
        .then(res => res.json())
        .then(json => { return json })
        .catch((error) => console.log(error))
    console.log(response)
    return response
}

//delete
export async function deleteById(id: number) {
    const response = await fetch(urlServer + `/${id}`, {
        method: "DELETE"
    })
        .then(res => res.json())
        .then(json => { return json })
        .catch((error) => console.log(error))
    return response
}