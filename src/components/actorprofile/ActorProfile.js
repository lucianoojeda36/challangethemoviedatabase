import React from 'react';
import { Image } from 'antd';
import { useSelector } from 'react-redux';
import './ActorProfile.scss'

export default function ActorProfile() {

  const users = useSelector((state) => state.dataReducer?.user)

  console.log('users======>', users ? users : "uju")

  function generes () {
    if(users.gender && users.gender === 0){ return <span className='span-item' style={{backgroundColor:'#FCF3CF'}}>Undefeined</span>}
    if(users.gender && users.gender === 1){ return <span className='span-item' style={{backgroundColor:'#FCF3CF'}}>Mujer</span>}
    else {return <span className='span-item' style={{backgroundColor:'#FCF3CF'}}>Hombre</span>}
  }

  return (
    <div className='container-profile'>
      <Image
        width={200}
        src={`https://image.tmdb.org/t/p/original/${users?.profile_path}`}
      />
      <h1>{users.name}</h1>
      {generes()}
      <span className='span-item'>Popularidad:{users.popularity}</span>
    </div>
  );
}
