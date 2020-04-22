import React, { useEffect, useState } from 'react';
import api from '../../services/api';


export default function Rooms({ history }){
  const [rooms, setRooms] = useState([]);

  function handleNewRoom(){
    history.push('/newroom');
  }

  useEffect(()=>{
    async function loadRooms(){
      const response = await api.get('/rooms');
      setRooms( response.data );
    }
   
      
 

    loadRooms();


  }, [history]);
  
  
  return (
    <>
      <header>
      </header>
      <button
        className="btn secundary"
        onClick={handleNewRoom}>
        NOVA SALA
      </button>
      <ul className="rooms-list">
        { rooms.map( room => (
          <li key={room._id}>
            <header />
            <strong> { room.name } </strong>
          </li>
        ))}
      </ul>
    </>
  )
};
