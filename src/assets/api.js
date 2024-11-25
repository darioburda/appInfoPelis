// src/services/api.js
const API_URL = 'https://api.themoviedb.org/3';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZTRmMzY5ODc2NjY0MTI0NWFhMWQzOTY5MDA2ODczNyIsIm5iZiI6MTczMjIxODk5Ni41MjU1OTY2LCJzdWIiOiI2NzNmODg1OThlMWFiYWY0ODJkYjdiNmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LEkuDOcnDJS2hR_MUWZzntshNsRIDst6EzGGfQo5Kig'
    }
};

// Función para realizar solicitudes a la API
export async function fetchPelis(link) {
    try {
        const response = await fetch(`${API_URL}/${link}`, options);
        if (!response.ok) {
            console.error(`Error al obtener datos: ${response.status}`);
        }
        const listado = await response.json();
        return listado;
    } catch (error) {
        console.error('Error en la API:', error);
        return null;
    }
}
