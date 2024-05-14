import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useChannelSnippet = channelId => {
  return useQuery({
    queryKey: ['video', channelId],
    queryFn: () => {
      const youtube = new Youtubes();
      return youtube.channelSnippet(channelId);
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

  async channelSnippet(channelId, id) {
    return this.#channelDetailUrl(channelId);
  }

  async #channelDetailUrl(channelId) {
    return this.httpClient
      .get('channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      })
      .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }
}
