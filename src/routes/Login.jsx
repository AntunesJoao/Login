import { useState } from 'react'
import './Login.css'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const Login = () => {

    const [cadastro, setCadastro] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/api/cadastrar/login", {
        email,
        password,
      })
      console.log('Login realizado:', response.data)
       navigate('/home')
    } catch (error) {
      console.error('Erro ao fazer login:', error.response?.data || error.message)
    }
  }


  return (
    <div className="main">
        <div className="form-left bg-primary" variant="primary"></div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="conteiner mt-4">
            <label htmlFor="email" className='form-label'>Email</label>
            <input 
            type="text" 
            name="email" 
            value={email}
             onChange={(e) => setEmail(e.target.value)}
            className='form-control' />
        </div>
        <div className="conteiner mt-4">
            <label htmlFor="senha" className='form-label'>Senha</label>
            <input 
            type="password"
            name="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className='form-control' 
            autocomplete="current-password"/>
        </div>
        <Link to="/cadastro" >
        <button>Cadastrar</button>
      </Link>
      <button type='submit'>Enviar</button>
      </form>
      
    </div>
  )
}

export default Login
