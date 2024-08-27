import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.reachinbox.com',
});

export const getOneBoxList = async () => {
  try {
    const response = await api.get('/onebox/list');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getOneBoxItem = async (threadId) => {
  try {
    const response = await api.get(`/onebox/${threadId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteOneBoxItem = async (threadId) => {
  try {
    const response = await api.delete(`/onebox/${threadId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};