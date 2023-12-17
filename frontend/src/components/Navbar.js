import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Todo</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <button onClick={handleClick}>Log Out</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to="/login">Login</Link>
              <span className="divider"></span>
              <Link to="/signup">Sign Up</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
