import React, { useState } from 'react'
import './Cadastro.css'
import axios from 'axios'

const Cadastro = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''})

    const handleChange = (e) =>{
      setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
      e.preventDefault()
      try {
        const response = await axios.post('http://localhost:3000/api/cadastrar', form)
        console.log('Cadastro realizado com sucesso', response.data)

      } catch (error) {
        console.error('Error no cadastro:::',error)
        
      }
    }


  return (
    <div className='form-right'>
      <form className='form-cadastro' onSubmit={handleSubmit}>
      <h2>Cadastrar</h2>
      <div className="conteiner mt-4">
            <label htmlFor="name" className='form-label'>Nome</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} className='form-control' />
        </div>

        <div className="conteiner mt-4">
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="text" name="email"value={form.email} onChange={handleChange} autoComplete="current-password" className='form-control' />
        </div>

        <div className="conteiner mt-4">
            <label htmlFor="password" className='form-label'>password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} className='form-control' />
        </div>
      
      <button type='submit'>Enviar</button>
    </form>
    </div>
  )
}

export default Cadastro
