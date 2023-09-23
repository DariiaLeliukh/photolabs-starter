import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataForModal, setDataForModal] = useState({});
  const [favorites, setFavorites] = useState([]);

  //TODO: add or REMOVE from favorites
  const changeFavourites = (id) => {
    if (!favorites.includes(id)) {
      const freshArray = [...favorites, id];
      setFavorites(freshArray);
    } else {
      let freshArray = [];
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i] === id) {
          favorites.splice(i, 1);
          freshArray = [...favorites];
        }
      }
      setFavorites(freshArray);
    }
  };

  const changeShowModal = () => {
    if (isModalVisible) {
      setIsModalVisible(false);
      return;
    }
    setIsModalVisible(true);
  };
  const passPhotoInfo = (photoInfo) => {
    if (dataForModal) {
      setDataForModal({});
    }
    setDataForModal(photoInfo);
  };

  return (
    <div className="App">
      <HomeRoute toShowModal={changeShowModal} passPhotoInfo={passPhotoInfo} changeFavourites={changeFavourites} favorites={favorites} />
      {isModalVisible && <PhotoDetailsModal toShowModal={changeShowModal} changeFavourites={changeFavourites} photoInfo={dataForModal} favorites={favorites} />}
    </div>
  );
};

export default App;
