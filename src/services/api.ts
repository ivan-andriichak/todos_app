import axios from "axios";

import {Todo} from "../types/types.todos.ts";

export const fetchTodos = async ():Promise<Todo[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
return response.data;
}