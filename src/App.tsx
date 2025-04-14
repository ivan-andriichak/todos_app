import './App.css'
import {useEffect, useState} from "react";
import {Todo} from "./types/types.todos.ts";
import {fetchTodos} from "./services/api.ts";
import LoadingSkeleton from "./components/LoadingSkeleton.tsx";
import TodoCard from "./components/TodoCard.tsx";

function App() {
const [todos, setTodos] = useState<Todo[]>([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const loadTodos = async () => {
    setIsLoading(true);
    try {
      const data: Todo[] = await fetchTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  loadTodos();
}, []);



  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Todos Dashboard</h1>
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        {isLoading ? (
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
  )
}


export default App;
