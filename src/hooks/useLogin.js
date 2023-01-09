// this hook is to dispatch the login action to DB

import { useState } from 'react';
import { useAuthContext } from  './useAuthContext';
import jwt_decode from "jwt-decode";


export const useLogin = () => { 
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  // fetches refresh token and catches error   
  const refreshToken = async () =>{
    try {
      const response = await fetch('/access/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();

      localStorage.setItem('token', data.token);

    } catch (error) {
      console.error(error);
    }
  }

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);  // reset error, no need to show it every time
    
    // const response = await fetch('http://localhost:5000/access', {method, headers, body})
    const response = await fetch('https://test.zyax.se/access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
      });

    const json = await response.json();
    console.log(json);
    // if response not ok, set erro and stop loading
    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
    }
    // if response ok then 
    if (response.ok) {
      //save JWT to local storage (must be stringified)
      localStorage.setItem('token', JSON.stringify(json));
      //update auth context with user data
      dispatch({ type: 'LOGIN', payload: json });
      
      setIsLoading(false);
    }

    
    // check if token is about to expire then refresh it
    const jwtExpiration = localStorage.getItem('token');

    const jwtExpirationDate = jwt_decode(jwtExpiration).exp * 1000;
    console.log('jwtExpirationDate', jwtExpirationDate, 'Date.now()', Date.now());

    if (jwtExpiration && Date.now() > jwtExpiration) {
      refreshToken();
    }

  }
  return { login, isLoading, error}
}