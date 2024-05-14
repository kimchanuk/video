import React from 'react';
import { useChannelSnippet } from '../hooks/useChannelSnippet';

export default function ChannelInfo({ video }) {
  const { title, channelTitle, channelId, thumbnails, publishedAt } =
    video.snippet;

  const { error, isLoding, data: dataUrl } = useChannelSnippet(channelId);

  return (
    <section className='flex my-4 mb-8 items-center'>
      {dataUrl && <img src={dataUrl} className='w-10 h-10 rounded-full' />}
      <p className='text-lg font-medium ml-2'>{channelTitle}</p>
    </section>
  );
}
