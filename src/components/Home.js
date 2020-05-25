import React, { useState } from 'react';
import { useServerData } from '../state/serverDataContext';

const Home = () => {
  const serverState = useServerData((data) => {
  });
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
