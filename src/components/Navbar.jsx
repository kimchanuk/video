import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='flex gap-4 p-8'>
      <Link to={'/'}>home</Link>
      <Link to={'/videos'}>videos</Link>
    </nav>
  );
}
