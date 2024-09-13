import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('https://api.example.com/products');
    return response.data;
  } catch (error) {
    console.error('Ürünler alınamadı:', error);
    return [];
  }
};
