import React, { useState } from 'react';

import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    changeFavourites,
    changeShowModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute toShowModal={changeShowModal} changeFavourites={changeFavourites} favorites={state.favorites} />
      {state.isModalVisible && <PhotoDetailsModal toShowModal={changeShowModal} changeFavourites={changeFavourites} photoInfo={state.dataForModal} favorites={state.favorites} />}
    </div>
  );
};

export default App;
