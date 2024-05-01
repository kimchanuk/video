import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';

const APIKEY = 'AIzaSyCarTD31nX5xhsSnNCD9wdp7mgbCYvJ9QM';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['videos', keyword],
    //키값 뒤에 키워드를 넣지 않으면 fetch에서 파람으로 가저온 keyword를 못읽음
    queryFn: async () => {
      return await fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
        .then(res => res.json())
        .then(data => data.items);
    },
  });

  return (
    <>
      <div>videos {keyword ? `${keyword}` : `🔥`}</div>
      {isLoading && <p>isLoding...</p>}
      {error && <p>Something is wrong😑</p>}

      {videos && (
        <ul>
          {videos.map((t, i) => {
            return <VideoCard key={i} video={t} />;
          })}
        </ul>
      )}
    </>
  );
}
