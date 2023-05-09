import React from 'react';

export default function User({ user, logoutHanlde }) {
  const { photoURL } = user;
  return (
    <>
      <button onClick={logoutHanlde}>
        <img
          src={photoURL}
          className='w-16 h-12 rounded-full hover:scale-125 ease-in-out duration-300'
        />
      </button>
    </>
  );
}
