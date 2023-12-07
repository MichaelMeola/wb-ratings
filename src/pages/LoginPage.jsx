import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm.jsx'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = async (e, formData) => {
    e.preventDefault()

    let res = await axios.post('/api/auth', formData)

    if(res.data.success) {
      navigate('/me')
    } else {
      alert('Login failed!')
    }
  }

  return (
    <>
      <h1>Log In</h1>
      <LoginForm onLogin={handleLogin} />
    </>
  );
}
