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
            <Link to='/home'><h4> HOME </h4></Link> 
            {user && (
              <div>
                <span>{user.email}</span>
                <button onClick={handleLogout}> LogOut </button>
                <Link to='/loggedin'><strong>Loggedin</strong></Link>
              </div>
            )} 
            {!user && (
              <div> 
              <Link to='/'><strong>Login</strong></Link>
              {/* <Link to='/register'><strong>Register</strong></Link> */}
            </div>
            )}
        </nav>
    </header>

  )

}

export default Navbar;