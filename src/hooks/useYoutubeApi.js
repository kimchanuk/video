import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useYoutubeApi = keyword => {
  return useQuery({
    queryKey: ['video', keyword],
    queryFn: () => {
      const youtube = new Youtube();
      return youtube.youtubeSearch(keyword);
    },
  });
};

class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }
  async youtubeSearch(keyword) {
    return keyword ? this.#searchByKeywords(keyword) : this.#mostPopular();
  }

  async #searchByKeywords(keyword) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.httpClient
      .get('videos', {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        },
      })
      .then(res => res.data.items);
  }
}
