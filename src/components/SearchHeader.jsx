import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState('');

  useEffect(() => {
    setText(keyword || '');
  }, [keyword]);

  //1. 인풋에서 text벨류를 submit을 하면 네비게이트를 통해 text가 키워가되서 이동함
  //2. 파람을 받음 파람은 키워드,
  //3. 파람이 변경될때 (즉, 1,2,3이 완료됬을때) text는 키워드로 변경해줘
  //즉 text는 input의 e.value값이 먼저되고 이게 파람으로 간다.
  //파람으로 변경된거는 text로 받는다.

  const searchChangeHandler = e => {
    const value = e.target.value;
    setText(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  };

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600'>
      <Link to={'/'} className='flex items-center'>
        <BsYoutube className='text-4xl text-brand' />
        <h1 className='font-bold ml-2 text-3xl'>YouTube</h1>
      </Link>

      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray-50'
          type='text'
          placeholder='Search..'
          value={text}
          onChange={searchChangeHandler}
        />
        <button className='bg-zinc-600 p-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
