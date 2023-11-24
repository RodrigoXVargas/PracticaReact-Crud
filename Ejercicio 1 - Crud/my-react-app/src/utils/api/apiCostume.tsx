import { Costume } from "../../interfaces/Costume";

export async function getAll() {
    const urlServer = "http://localhost:1234/costumes";
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

export async function getAllBy(params: string) {
    
    const urlServer = `http://localhost:1234/costumes?${params}`;
    
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

export async function getOne(id: string) {
    const urlServer = `http://localhost:1234/costumes/${id}`;
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

export async function saveCostume(costumeToSave: Costume) {
    if (costumeToSave.id === "0") {
        const urlServer = `http://localhost:1234/costumes`;
        const response = await fetch(urlServer, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(costumeToSave),
            mode: 'cors'
        });
        return await response.json();
    } else {
        const urlServer = `http://localhost:1234/costumes/${costumeToSave.id}`;
        const response = await fetch(urlServer, {
            method: 'PATCH',
            headers: {
                'Content-type': "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(costumeToSave),
            mode: 'cors'
        })
        return await response.json();
    }

}

export async function deleteCostume(id: string) {
    const urlServer = `http://localhost:1234/costumes/${id}`;
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