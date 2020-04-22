import React , { useState } from 'react';

import api from '../../services/api';

export default function Login({ history }){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNewUser(event){
    history.push('/new');
  }

  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/sessions', { email , password });

    const { _id } = response.data;
    localStorage.setItem('user', _id);
  }

  return (
    <>
      <p>
        Login
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input 
          type="email"
          id="email"
          placeholder="Seu email aqui"
          value={email}
          onChange={ event => setEmail(event.target.value) }
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          id="password"
          placeholder="Sua senha aqui"
          value={password}
          onChange={ event => setPassword(event.target.value) }
        />
        <button className="btn primary">
          ENTRAR
        </button>
      </form>
        <button 
          className="btn secundary"
          onClick={handleNewUser}>
          CADASTRE-SE
        </button>
    </>
  )
};
