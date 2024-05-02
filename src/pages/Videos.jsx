import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { YoutubeApiContext } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtubeApi, fakeYoutubeApi, abc } = useContext(YoutubeApiContext);

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['hahaha', keyword],
    queryFn: () => {
      return fakeYoutubeApi.search(keyword);
      //mock json data = fakeYoutubeApi
      //real api data = youtubeApi
      //fakeYoutubeApi.search(keyword)
    },
  });

  return (
    <>
      <div>videos {keyword ? `${keyword}` : `🔥`}</div>
      {isLoading && <p>isLoding...</p>}
      {error && <p>Something is wrong😑</p>}

      {videos && (
        <ul>
          {videos.map(t => {
            return <VideoCard key={t.id} video={t} />;
          })}
        </ul>
      )}
    </>
  );
}
