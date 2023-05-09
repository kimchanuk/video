import React, { useEffect, useState } from 'react';
import {
  BsPersonPlus,
  BsSearch,
  BsBell,
  BsPersonVideo,
  BsPersonCircle,
  BsPeople,
} from 'react-icons/bs';
import { AiOutlineVideoCamera } from 'react-icons/ai';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { login, logout, onUserStateChange } from '../api/firebase';
import User from './User';

export default function SearchHeader() {
  const [user, setUser] = useState(null);
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ''), [keyword]);

  useEffect(() => {
    onUserStateChange(user => {
      setUser(user);
    });
  }, []);

  const logoutHanlde = () => {
    alert('Logout!');
    logout();
  };

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4 items-center'>
      <Link to='/' className='flex items-center'>
        <img
          src={process.env.PUBLIC_URL + 'boys.png'}
          alt=''
          className='w-32 h-16'
        />
        <h1 className='font-bold ml-2 text-3xl'>FATBOY</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          type='text'
          placeholder='Search...'
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className='bg-zinc-600 px-4'>
          <BsSearch />
        </button>
      </form>

      <div className='flex items-center'>
        <Link>
          <button className='mr-4 text-3xl'>
            <AiOutlineVideoCamera />
          </button>
        </Link>

        <Link>
          <button className='mr-4'>
            <BsBell />
          </button>
        </Link>

        {user && (
          <User className='text-2xl' user={user} logoutHanlde={logoutHanlde} />
        )}
        {!user && (
          <button
            onClick={() => {
              login();
            }}
          >
            <BsPeople className='text-3xl hover:text-gray-500' />
          </button>
        )}
      </div>
    </header>
  );
}
