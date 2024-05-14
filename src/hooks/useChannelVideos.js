import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useChannelVideos = channelId => {
  return useQuery({
    queryKey: ['related', channelId],
    queryFn: () => {
      const youtube = new Youtubes();
      return youtube.channelVideos(channelId);
    },
  });
};

class Youtubes {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
    });
  }

  async channelVideos(channelId) {
    return this.#channelAnotherVideos(channelId);
  }

  async #channelAnotherVideos(channelId) {
    return this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          channel: 'Mh1QhMc%26type',
          maxResult: 20,
        },
      })
      .then(res =>
        res.data.items.map(item => ({ ...item, id: item.id.videoId }))
      );
  }
}
