import axios from 'axios';

export const useYoutube = () => {
  const httpClient = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
      key: process.env.REACT_APP_YOUTUBE_API_KEY,
    },
  });

  const abc = async keyword => {
    return keyword ? searchByKeyword(keyword) : mostPopular();
  };

  const searchByKeyword = async keyword => {
    const res = httpClient.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    });
    const items = res.data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));
    return items;
  };

  const mostPopular = async () => {
    const res = await httpClient.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    return res.data.items;
  };
  return [abc];
};
