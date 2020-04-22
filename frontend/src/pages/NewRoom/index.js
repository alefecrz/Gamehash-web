import React, { useState } from 'react';

//import api from '../../services/api';

export default function NewUser({ history }){
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleBack(event){
    history.push('/rooms');
  }

  async function handleSubmit(event){
    event.preventDefault();
  }
  return (
    <>
      <p>
        Criar Room
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome *</label>
        <input 
          type="text"
          id="name"
          placeholder="O nome da sua sala"
          value={name}
          onChange={ event => setName(event.target.value) }
        />
        <label htmlFor="password">Password (opcional)</label>
        <input 
          type="password"
          id="password"
          placeholder="Sua senha aqui"
          value={password}
          onChange={ event => setPassword(event.target.value) }
        />
        <button className="btn primary">
          NOVA SALA
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
