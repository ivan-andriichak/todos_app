import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../../types';

interface TodosState {
  todos: Todo[];
  totalCount: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  totalCount: 0,
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
    fetchTodosSuccess(state, action: PayloadAction<{ todos: Todo[]; totalCount: number }>) {
      state.status = 'succeeded';
      state.todos = action.payload.todos;
      state.totalCount = action.payload.totalCount;
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