import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.reachinbox.com',
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const googleLogin = async (token) => {
  try {
    const response = await api.post('/google-login', { token });
    return response.data;
  } catch (error) {
    throw error;
  }
};