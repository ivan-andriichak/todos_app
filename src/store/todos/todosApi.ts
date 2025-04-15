import axios from 'axios';
import { Todo } from '../../types';

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data.slice(0, 10); // Limit to 10 todos
};