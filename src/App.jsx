import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LogoutButton from './components/LogoutButton.jsx';

export default function App() {
  const navigate = useNavigate()

  const handleLogut = async (e) => {
    e.preventDefault()

    const res = await axios.post('/api/logout')

    if(res.data.success) {
      navigate('/')
    } else {
      alert('Failed to logout. Try again later.')
    }
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">All movies</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/me">Your ratings</NavLink>
          </li>
          <li>
            <LogoutButton onLogout={handleLogut} />
          </li>
        </ul>
      </nav>

      <hr />

      <main>
        <Outlet />
      </main>
    </>
  );
}
