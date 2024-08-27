import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.reachinbox.com',
});

export const sendReply = async (threadId, reply) => {
  try {
    const response = await api.post(`/reply/${threadId}`, reply);
    return response.data;
  } catch (error) {
    throw error;
  }
};