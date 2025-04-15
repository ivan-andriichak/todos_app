import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import todosReducer from './todos/todosSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;