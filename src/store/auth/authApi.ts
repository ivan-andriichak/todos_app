import { User } from '../../types';

// Mock authentication function
export const loginUser = async (email: string, password: string): Promise<User> => {
  // Simulate API call with mock credentials
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password123') {
        resolve({ email });
      } else {
        reject(new Error('Invalid email or password'));
      }
    }, 1000);
  });
};