import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Videos />,
      },
      {
        path: '/videos',
        element: <Videos />,
      },
      {
        path: '/videos/:keyword',
        element: <Videos />,
      },
      {
        path: '/videos/watch/:videoId',
        element: <VideoDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </QueryClientProvider>
);

//라이브러리 사용
//유튜브 오픈API를 이용하여 실제 유튜브 데이터를 사용
//테일윈드 css 스타일
//리엑트 라우터와 리엑트 쿼리 사용
//openApi 리스트 확인 테스트 포스트맨
