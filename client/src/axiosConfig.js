//Sirve  centralizar la configuración de Axios en la carpeta src.
//De esta forma, si necesitamos cambiar la configuración de Axios, solo necesitamos hacerlo en un solo lugar.

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export default api;