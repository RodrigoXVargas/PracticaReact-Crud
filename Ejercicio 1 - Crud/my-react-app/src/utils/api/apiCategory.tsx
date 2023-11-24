

export async function getAll() {
    const urlServer = "http://localhost:1234/categories";
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