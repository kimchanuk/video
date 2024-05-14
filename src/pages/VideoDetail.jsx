import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import ChannelVideos from '../components/ChannelVideos';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelTitle, channelId, description } = video.snippet;
  const id = video.id;

  const [discriptionClose, setDiscriptionClose] = useState(false);

  const closeBtn = () => {
    setDiscriptionClose(prev => !prev);
  };

  return (
    <section className='flex flex-col lg:flex-row'>
      <article className='basis-4/6'>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='365'
          src={`https://www.youtube.com/embed/${id}`}
          title='youtubeVideo'
        />

        <div className='p-8'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} video={video} />
          <button onClick={closeBtn}>설명 보기</button>
          {discriptionClose && (
            <pre className='whitespace-pre-wrap'>{description}</pre>
          )}
        </div>
      </article>

      <section className='basis-2/6'>
        <ChannelVideos id={id} video={video} />
      </section>
    </section>
  );
}
