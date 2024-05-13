import React, { useContext, useEffect } from 'react';
import { headerContext } from '../context/headerContext';
import { BsSearch } from 'react-icons/bs';
import { PiYoutubeLogoDuotone } from 'react-icons/pi';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const { searchText, setSearchText, handleInputChange } =
    useContext(headerContext);

  const { keyword } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setSearchText(keyword || '');
    //키워드가 변경될때마다 마운트, 키워드가 있으면 키워드 아니면 공백
  }, [keyword]);

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/videos/${searchText}`);
  };

  return (
    <header className='w-full flex items-center p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to={'/'}>
        <div className='flex items-center'>
          <span className='text-brand text-4xl'>
            <PiYoutubeLogoDuotone />
          </span>
          <h1 className='font-bold ml-2 text-3xl'>YOUTUBE</h1>
        </div>
      </Link>
      <form onSubmit={handleSubmit} className='w-full flex justify-center'>
        <input
          className='text-gray-50 w-7/12 p-2 outline-none bg-black'
          id='headerBtn'
          type='text'
          placeholder='search...'
          value={searchText}
          onChange={handleInputChange}
        />
        <button className='font-bold bg-zinc-600 p-4'>
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
