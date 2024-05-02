import axios from 'axios';

export const search = async keyword => {
  return await axios
    .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then(res => res.data.items);
};
