import React from 'react';

export default function VideoCard({ video }) {
  return (
    <li>
      <span>제목 : {video.snippet.title}</span>
      <span>비디오 : {video.snippet.thumbnails.default.url}</span>
      <br />
      <br />
    </li>
  );
}
