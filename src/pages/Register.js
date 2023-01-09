// import { useState } from 'react';
// import { useRegister } from '../hooks/useRegister';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { register, isLoading, error } = useRegister();

// const handleRegister = async (e) => {
//   e.preventDefault();
//   console.log(email, password);
//   await register(email, password) 
//  }

//   return (
//     <form className='register' onSubmit={handleRegister}>
//       <h2>REGISTRATION FORM</h2>

//         {/* <label htmlFor='email'> Email: </label> */}
//         <input
//           type='email'
//           value={email}
//           placeholder='Enter email'
//           onChange={(e) => setEmail(e.target.value)}
//         />
        
//         {/* <label htmlFor='password'> Password: </label> */}
//         <input
//           type='password'
//           value={password}
//           placeholder='Enter password'
//           onChange={(e) => setPassword(e.target.value)}
//         />
// {/*validation: button disabled since I dont want user to keep clicking while is loading  */}
//         <button type='submit' disabled={isLoading}>Register</button>
//         {error && <div className='error'> {error} </div>}
//     </form>
//     );
// }

// export default Register;