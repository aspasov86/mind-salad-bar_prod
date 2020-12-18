import axios from 'axios';

export const getIngredients = async () => {
  const res = await axios.get('https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients');
  return res.data;
};

export const getIngredientById = async (id) => {
  const res = await axios.get(`https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients/${id}`);
  return res.data;
};

export const createIngredient = async (data) => {
  const res = await axios.post('https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients', data);
  return res.data;
};

export const updateIngredient = async (id, data) => {
  const res = await axios.put(`https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients/${id}`, data);
  return res.data;
};

export const deleteIngredient = async (id) => {
  const res = await axios.delete(`https://5fca00983c1c220016441782.mockapi.io/api/v1/ingredients/${id}`);
  return res.data;
};
