import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { search } from '../api/youtubeAPI';
import FakeYoutubeAPI from '../api/fakeYoutubeAPI';

const APIKEY = 'AIzaSyCarTD31nX5xhsSnNCD9wdp7mgbCYvJ9QM';

export default function Videos() {
  const { keyword } = useParams();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['hahaha', keyword],
    queryFn: () => {
      const youtube = new FakeYoutubeAPI();
      return youtube.search(keyword);
    },
  });

  //api와 목데이터 스위치 하는 방법
  //api 퍼블릭으로 설정할 것.

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
