import { useState } from 'react'
import './Login.css'


import Cadastro from '../components/Cadastro'

const Login = () => {

    const [cadastro, setCadastro] = useState(false)


  return (
    <div className="main">
        <div className="form-left bg-primary" variant="primary"></div>
      <form>
        <h2>Login</h2>
        <div className="conteiner mt-4">
            <label htmlFor="nome" className='form-label'>Email</label>
            <input type="text" name="email" className='form-control' />
        </div>
        <div className="conteiner mt-4">
            <label htmlFor="nome" className='form-label'>Senha</label>
            <input type="text" name="email" className='form-control' />
        </div>

        <p>Ainda não tem conta? <button onClick={() =>setCadastro(e =>({...e, cadastrar: !e.cadastro}))}>
            <a href="#">Cadastrar</a>
        </button></p>
        {cadastro && <Cadastro/>}
      </form>
      
    </div>
  )
}

export default Login
