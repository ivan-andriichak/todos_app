import {Todo} from "../types/types.todos.ts";

interface TodoCardProps {
  todo:Todo;
}


function TodoCard({ todo }: TodoCardProps)  {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-semibold mb-2 capitalize">{todo.title}</h2>
      <p className="text-gray-600">
        Status: {todo.completed ? (
        <span className="text-green-600">Completed</span>
      ) : (
        <span className="text-yellow-600">Pending</span>
      )}
      </p>
    </div>
  )
}


export default TodoCard;
