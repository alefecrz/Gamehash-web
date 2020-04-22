import React, { useState } from 'react';

import api from '../../services/api';

export default function NewUser({ history }){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleBack(event){
    history.push('/');
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
        Criar conta
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome *</label>
          <input 
            type="text"
            id="name"
            placeholder="Seu nome aqui"
            value={name}
            onChange={ event => setName(event.target.value) }
          />
        <label htmlFor="email">E-mail *</label>
        <input 
          type="email"
          id="email"
          placeholder="Seu email aqui"
          value={email}
          onChange={ event => setEmail(event.target.value) }
        />
        <label htmlFor="password">Password *</label>
        <input 
          type="password"
          id="password"
          placeholder="Sua senha aqui"
          value={password}
          onChange={ event => setPassword(event.target.value) }
        />
        <button className="btn primary">
          CRIAR
        </button>
      </form>
        <button 
          className="btn secundary"
          onClick={handleBack}>
          VOLTAR
        </button>
    </>
  );
};
