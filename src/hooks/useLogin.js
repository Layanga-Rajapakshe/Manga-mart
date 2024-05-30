import toast from 'react-hot-toast';
import { useState } from 'react';

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async ({ username, password }) => {
    const success = handleInputErrors({ username, password });
    if (!success) return { success: false }; // Return success as false

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await res.json();
      console.log(data);
      toast.success('Login successful!');
      return { success: true, data }; // Return success as true and data
    } catch (error) {
      toast.error(error.message);
      return { success: false }; // Return success as false in case of error
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    toast.error('Please fill in all fields');
    return false;
  }

  return true;
}
