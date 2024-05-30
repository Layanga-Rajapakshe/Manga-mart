import toast from 'react-hot-toast';
import { useState } from 'react';

const useSignup= () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({ username,email,password,confirmPassword }) => {
    const success = handleInputErrors({ username,email,password,confirmPassword });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username,email,password,confirmPassword}),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      const data = await res.json();
      console.log(data);
      toast.success('Signup successful!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ username, email, password, confirmPassword }) {
  if (!username || !email || !password || !confirmPassword) {
    toast.error('Please fill in all fields');
    return false;
  }

  if(password !== confirmPassword){
        toast.error('Passwords do not match');
        return false;
    } 

    if(password.length < 6){
        toast.error('Password should be at least 6 characters');
        return false;
    }

  return true;
}
