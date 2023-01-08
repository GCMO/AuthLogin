import { useState } from 'react';
import {useLogin} from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {login, error, isLoading} = useLogin();

const handleLogin = async (e) => {
  e.preventDefault();
  console.log(email, password);
  
  await login(email, password)
}

  return (
    <form className='login' onSubmit={handleLogin}>
      <h2>LOGIN FORM</h2>
      
          {/* <label htmlFor='email'> Email: </label> */}
          <input
            // type='email'
            value={email}
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <label htmlFor='password'> Password: </label> */}
          <input
            type='password'
            value={password}
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}
          />
        <button type='submit' disabled={isLoading}>LOGIN</button>
        {error && <div className='error'>{error}</div>}

    </form>
    );
}

export default Login;