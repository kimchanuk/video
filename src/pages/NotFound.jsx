import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center'>
      Not Found😭
      <button
        className='text-3xl font-bold text-brand'
        onClick={() => {
          navigate('/');
        }}
      >
        <BsYoutube />
      </button>
    </div>
  );
}
