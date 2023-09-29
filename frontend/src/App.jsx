import React, { useReducer, useState } from 'react';

import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    changeFavourites,
    showModal,
    closeModal
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        toShowModal={showModal}
        changeFavourites={changeFavourites}
        favorites={state.favorites}
        photoData={state.photoData}
        topicData={state.topicData}
      />
      {state.isModalVisible &&
        <PhotoDetailsModal
          closeModal={closeModal}
          changeFavourites={changeFavourites}
          photoInfo={state.dataForModal}
          favorites={state.favorites}
          toShowModal={showModal}
        />
      }
    </div>
  );
};

export default App;
