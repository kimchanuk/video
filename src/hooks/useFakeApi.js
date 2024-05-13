import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { headerContext } from '../context/headerContext';

export const useFakeApi = keyword => {
  const { videosState, setVideosState } = useContext(headerContext);
  return useQuery({
    queryKey: ['video', keyword],
    queryFn: () => fakeSearch(keyword),
  });

  function fakeSearch(keyword) {
    return keyword ? searchByKeywords(keyword) : mostPopular();
  }

  function searchByKeywords() {
    return axios
      .get('/videos/search.json')
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }

  function mostPopular() {
    return axios.get('/videos/hot.json').then(res => res.data.items);
  }
};
