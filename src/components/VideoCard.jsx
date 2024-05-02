import React from 'react';

export default function VideoCard({ video }) {
  const { snippet } = video;

  return (
    <li>
      <span>제목 : {snippet.title}</span>
      <br />
      <br />
    </li>
  );
}
