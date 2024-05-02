import React, { createContext, useContext } from 'react';
import { YoutubeAPI } from '../api/youtubeAPI';
import { FakeYoutubeAPI } from '../api/fakeYoutubeAPI';
import { useYoutube } from '../hooks/useYoutube';

export const YoutubeApiContext = createContext();

export const YoutubeApiContextProvider = ({ children }) => {
  const [abc] = useYoutube();
  const youtubeApi = new YoutubeAPI();
  const fakeYoutubeApi = new FakeYoutubeAPI();

  return (
    <YoutubeApiContext.Provider value={{ fakeYoutubeApi, youtubeApi, abc }}>
      {children}
    </YoutubeApiContext.Provider>
  );
};
