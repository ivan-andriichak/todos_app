import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const error = useSelector((state: RootState) => state.auth.error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>
        <LoginForm error={error ?? undefined}/>
      </div>
    </div>
  );
}