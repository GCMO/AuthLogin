import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handleLogout = () => {
    logout();
  }

  return (

    <header>
      <div className="container"></div>
        <nav>
            <Link to='/'><h4> HOME </h4></Link> 
          {!user && (
            <div> 
            <Link to='/login'><strong>Login</strong></Link>
            <Link to='/register'><strong>Register</strong></Link>
          </div>
          )}
            {user && (
              <div>
                <span>{user.email}</span>
                <button onClick={handleLogout} >LogOut</button>
              </div>
            )} 
        </nav>
    </header>

  )

}

export default Navbar;