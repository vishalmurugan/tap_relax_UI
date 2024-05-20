import React, { createContext, useState } from 'react';

const Context = createContext();

export const GlobalStore = ({ children }) => {
  const [getSocialMedia, setMedia] = useState([]);
  const [getProfile, setProfile] = useState({});

  return (
    <Context.Provider value={{ getSocialMedia, setMedia,setProfile,getProfile }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
