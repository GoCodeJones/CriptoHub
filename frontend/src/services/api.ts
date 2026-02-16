import axios from 'axios';
import type { Post, PostSummary } from '../types';

const API_URL = 'http://localhost:8080/api';

export const api = {
  getPosts: async (): Promise<PostSummary[]> => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  },

  getPost: async (slug: string): Promise<Post> => {
    const response = await axios.get(`${API_URL}/posts/${slug}`);
    return response.data;
  },

  getCategories: async (): Promise<string[]> => {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  },

  getTags: async (): Promise<string[]> => {
    const response = await axios.get(`${API_URL}/tags`);
    return response.data;
  },
};