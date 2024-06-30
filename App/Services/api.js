import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:3000'; // Ajusta si tu API está en otro puerto

const api = axios.create({
    baseURL: API_URL,
});

// Función para agregar el token JWT a las solicitudes
api.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

// Funciones para interactuar con la API
export const login = async (credentials) => {
    try {
        const response = await api.post('/login', credentials);
        return response.data; // Retorna directamente el objeto de datos de la respuesta
    } catch (error) {
        throw error.response?.data || { message: 'Error desconocido en el servidor' }; // Manejo de error más detallado
    }
};

// Puedes agregar otras funciones de API aquí, como createModulo, getModulos, etc.
