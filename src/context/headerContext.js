import { createContext, useState } from 'react';

export const headerContext = createContext();
export const HeaderContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [videosState, setVideosState] = useState([]);

  const handleInputChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <headerContext.Provider
      value={{
        searchText,
        setSearchText,
        handleInputChange,
        videosState,
        setVideosState,
      }}
    >
      {children}
    </headerContext.Provider>
  );
};
