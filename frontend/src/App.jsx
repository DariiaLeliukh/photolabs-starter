import React from 'react';

import './App.scss';
import useApplicationData from 'hooks/useApplicationData';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import UploadPhotoModal from 'routes/UploadPhotoModal';

const App = () => {
  const {
    state,
    changeFavourites,
    showModal,
    closeModal,
    loadPhotosByTopic,
    createPhoto,
    closeUploadPhotoModal,
    showUploadPhotoModal,
    refreshAfterUpload
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        toShowModal={showModal}
        changeFavourites={changeFavourites}
        favorites={state.favorites}
        photoData={state.photoData}
        topicData={state.topicData}
        loadPhotosByTopic={loadPhotosByTopic}
        createPhoto={createPhoto}
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
      {state.isUploadPhotoModalVisible &&
        <UploadPhotoModal
          closeModal={closeModal}
          closeUploadPhotoModal={closeUploadPhotoModal}
          toShowUploadPhotoModal={showUploadPhotoModal}
          refreshAfterUpload={refreshAfterUpload}
        />
      }
    </div>
  );
};

export default App;
