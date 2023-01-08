// this hook is to dispatch the login action to DB

import { useState } from 'react';
import { useAuthContext } from  './useAuthContext';


export const useLogin = () => { 
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

   
  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);  // reset error, no need to show it every time
    
    // const response = await fetch('http://localhost:5000/access', {method, headers, body})
    const response = await fetch('https://test.zyax.se/access/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
      });

    const json = await response.json();
    console.log(json);
    // if response not ok, set erro and stop loading
    if (!response.ok) {
      // setError(json.error);
      setIsLoading(false);
    }
    // if response ok then 
    if (response.ok) {
      //save JWT to local storage (must be stringified)
      localStorage.setItem('token', JSON.stringigy(json));
      //update auth context with user data
      dispatch({ type: 'LOGIN', payload: json });
      
      setIsLoading(false);
    }
  }
  return { login, isLoading, error}
}