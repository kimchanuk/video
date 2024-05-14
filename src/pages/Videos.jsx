import { useParams } from 'react-router-dom';
import VideoList from '../components/VideoList';
import { useFakeApi } from '../hooks/useFakeApi';
import { useYoutubeApi } from '../hooks/useYoutubeApi';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data: videoData } = useYoutubeApi(keyword);

  // useYoutubeApi(keyword);
  // useFakeApi(keyword)

  return (
    <>
      <div>videos : {keyword ? `🔎 ${keyword}` : '🔥'}</div>
      {isLoading && <p>isLoading...</p>}
      {error && <p>error...</p>}
      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
        {videoData &&
          videoData.map((t, i) => <VideoList key={`key-${t.id}`} video={t} />)}
      </ul>
    </>
  );
}
