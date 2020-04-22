import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import api from '../../services/api';

export default function NewUser({ history }){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onDrop = useCallback(acceptedFiles =>{

  },[]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  function handleBack(event){
    history.push('/');
  }

  async function handleSubmit(event){
    event.preventDefault();

    if(password !== rePassword ){
      alert('Password not match');
    }else{
      const response = await api.post('/users', { email , password });

      const { _id } = response.data;
      localStorage.setItem('user', _id);
    }
     
  }
  return (
    <>
      <p>
        Criar conta
      </p>
      <form onSubmit={handleSubmit}>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive ?
              <p>Drop the files here ...</p> :
              <p>Drag 'n' drop some files here, or click to select files</p>
          }
        </div>
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
         <label htmlFor="rePassword">Repeat Password *</label>
        <input 
          type="password"
          id="rePassword"
          placeholder="Sua senha aqui"
          value={rePassword}
          onChange={ event => setRePassword(event.target.value) }
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
