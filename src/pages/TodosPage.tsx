import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TodoList from '../components/TodoList';
import {logout} from "../store/auth/authSlice.ts";

export default function TodosPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex justify-end mb-6">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
      <TodoList />
    </div>
  );
}