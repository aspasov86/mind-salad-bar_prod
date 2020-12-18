import axios from 'axios';

export const getSalads = async () => {
  const res = await axios.get('https://5fca00983c1c220016441782.mockapi.io/api/v1/salads');
  return res.data;
};

export const getSaladById = async (id) => {
  const res = await axios.get(`https://5fca00983c1c220016441782.mockapi.io/api/v1/salads/${id}`);
  return res.data;
};

export const createSalad = async (data) => {
  const res = await axios.post('https://5fca00983c1c220016441782.mockapi.io/api/v1/salads', data);
  return res.data;
};

export const updateSalad = async ({ id, ...data }) => {
  const res = await axios.put(`https://5fca00983c1c220016441782.mockapi.io/api/v1/salads/${id}`, data);
  return res.data;
};

export const deleteSalad = async (id) => {
  const res = await axios.delete(`https://5fca00983c1c220016441782.mockapi.io/api/v1/salads/${id}`);
  return res.data;
};
