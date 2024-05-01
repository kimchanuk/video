import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const APIKEY = `AIzaSyCarTD31nX5xhsSnNCD9wdp7mgbCYvJ9QM`;

export default function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}
