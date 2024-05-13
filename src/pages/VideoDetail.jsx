import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import ChannelVideos from '../components/ChannelVideos';
import CommentsBox from '../components/CommentsBox';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelTitle, channelId, description } = video.snippet;
  const id = video.id;

  return (
    <section>
      <article>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='365'
          src={`https://www.youtube.com/embed/${id}`}
          title='youtubeVideo'
        />
        <h2 className=''>{title}</h2>
        <ChannelInfo id={channelId} name={channelTitle} />
        <pre>{description}</pre>
      </article>
      <section>
        <ChannelVideos id={id} />
      </section>
    </section>
  );
}
