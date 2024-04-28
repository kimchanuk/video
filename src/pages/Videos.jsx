import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Videos() {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const changeHandler = e => {
    setText(e.target.value);
    console.log(text);
  };

  const submitHandler = e => {
    e.preventDefault();
    setText('');
    navigate(`/videos/${text}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        value={text}
        onChange={changeHandler}
        className='border-2 border-black'
        placeholder='text videos ID : '
      />
    </form>
  );
}
