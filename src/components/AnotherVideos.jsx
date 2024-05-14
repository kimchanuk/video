import React, { useEffect } from 'react';
import { formatAgo } from '../util/data';
import { Link, useNavigate } from 'react-router-dom';

export default function AnotherVideos({ video, id, type }) {
  const { title, channelTitle, channelId, thumbnails, publishedAt } =
    video.snippet;
  const isList = type === 'list';
  const navigate = useNavigate();

  return (
    <li className={isList ? 'flex gap-1 m-2' : ''}>
      <Link to={`https://www.youtube.com/`}>
        <img
          className={isList ? 'w-60 mr-2' : 'w-full'}
          src={thumbnails.medium.url}
          alt={title}
        />
        <div>
          <p className='font-semibold my-2 line-clamp-1'>{title}</p>
          <p className='text-sm opacity-80'>{channelTitle}</p>
          <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
        </div>
      </Link>
    </li>
  );
}
