import React from 'react';
import { useChannelVideos } from '../hooks/useChannelVideos';
import AnotherVideos from './AnotherVideos';

export default function ChannelVideos({ id, video }) {
  const { channelId } = video.snippet;
  const { error, isLoading, data: videos } = useChannelVideos(channelId);

  return (
    <div>
      {isLoading && <p>isLoading...</p>}
      {error && <p>error...</p>}
      <ul className=''>
        {videos &&
          videos.map((t, i) => (
            <AnotherVideos key={`key-${t.id}`} video={t} id={id} type='list' />
          ))}
      </ul>
    </div>
  );
}
