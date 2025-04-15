import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import LoadingSkeleton from './LoadingSkeleton';
import TodoCard from './TodoCard';
import {fetchTodosFailure, fetchTodosStart, fetchTodosSuccess} from "../store/todos/todosSlice.ts";
import {fetchTodos} from "../services/api.ts";

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos, status, error } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    const loadTodos = async () => {
      dispatch(fetchTodosStart());
      try {
        const data = await fetchTodos();
        dispatch(fetchTodosSuccess(data));
      } catch (err) {
        dispatch(fetchTodosFailure(err instanceof Error ? err.message : 'Failed to fetch todos'));
      }
    };
    loadTodos();
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Todos Dashboard</h1>
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        {status === 'loading' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {todos.slice(0, 12).map((todo) => (
              <TodoCard key={todo.id} todo={todo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}