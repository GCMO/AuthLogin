import { useAuthContext } from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

const Loggedin = () => {

  const { user } = useAuthContext();

  if (user) {
    return (
      <div className="home">
        <h1> YOU ARE SUCCESSFULLY LOGGEDIN</h1>
        <h4> {user.email} </h4>
        <h4> This is a protected page </h4>
      </div>
    )
  };

  if (!user){
  return <Navigate to="/" />;  
  }
};

export default Loggedin