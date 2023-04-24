import axios from 'axios';

export const getWishes = () => {
  return axios.get('http://localhost:4000/wishes');
};

export const addWish = (wish) => {
  return axios.post('http://localhost:4000/wishes', wish);
};

export const deleteWish = (id) => {
  return axios.delete(`http://localhost:4000/wishes/${id}`);
};

export const updateWish = (id, updates) => {
  return axios.put(`http://localhost:4000/wishes/${id}`, updates);
};
