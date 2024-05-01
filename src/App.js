import React from 'react';
import { Outlet } from 'react-router-dom';

const APIKEY = `AIzaSyCarTD31nX5xhsSnNCD9wdp7mgbCYvJ9QM`;

export default function App() {
  return (
    <div>
      header
      <Outlet />
    </div>
  );
}
