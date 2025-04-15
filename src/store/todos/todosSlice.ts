import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types';

interface TodosState {
  todos: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  status: 'idle',
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    fetchTodosStart(state) {
      state.status = 'loading';
    },
    fetchTodosSuccess(state, action: PayloadAction<Todo[]>) {
      state.status = 'succeeded';
      state.todos = action.payload;
      state.error = null;
    },
    fetchTodosFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchTodosStart, fetchTodosSuccess, fetchTodosFailure } = todosSlice.actions;
export default todosSlice.reducer;