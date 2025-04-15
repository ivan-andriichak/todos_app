import axios from 'axios';
import { Todo } from '../../types';

export const fetchTodos = async (page: number, limit: number = 12): Promise<{ todos: Todo[]; totalCount: number }> => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
    params: {
      _page: page,
      _limit: limit,
    },
  });
  // JSONPlaceholder returns total count in 'x-total-count' header
  const totalCount = parseInt(response.headers['x-total-count'] || '0', 10);
  return { todos: response.data, totalCount };
};