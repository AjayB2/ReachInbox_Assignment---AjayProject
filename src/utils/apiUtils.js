const apiUrl = 'https://api.example.com';

const fetchApi = async (endpoint, options = {}) => {
  const response = await fetch(`${apiUrl}/${endpoint}`, options);
  return response.json();
};

const get = async (endpoint) => {
  return fetchApi(endpoint, { method: 'GET' });
};

const post = async (endpoint, data) => {
  return fetchApi(endpoint, { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
};

const put = async (endpoint, data) => {
  return fetchApi(endpoint, { method: 'PUT', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
};

const del = async (endpoint) => {
  return fetchApi(endpoint, { method: 'DELETE' });
};

export { get, post, put, del };