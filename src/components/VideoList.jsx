import React from 'react';
import { formatAgo } from '../util/data';
import { useNavigate } from 'react-router-dom';

export default function VideoList({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const id = video.id;

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${id}`, { state: { video } });
      }}
    >
      <img className='w-full' src={thumbnails.medium.url} alt={title} />
      <div>
        <p className='font-semibold my-2 line-clamp-1'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}
