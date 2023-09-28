import { useState } from 'react';

const useApplicationData = () => {
  const [state, setState] = useState({
    favorites: []
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataForModal, setDataForModal] = useState({});
  // const [favorites, setFavorites] = useState([]);

  //TODO: add or REMOVE from favorites
  const changeFavourites = (id) => {
    if (!state.favorites.includes(id)) {
      const freshArray = [...state.favorites, id];
      setState({ ...state, favorites: freshArray });
    } else {
      let freshArray = [];
      for (let i = 0; i < state.favorites.length; i++) {
        if (state.favorites[i] === id) {
          state.favorites.splice(i, 1);
          freshArray = [...state.favorites];
        }
      }
      setState({ ...state, favorites: freshArray });
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


  return {
    state,
    isModalVisible,
    dataForModal,
    // favorites,
    changeFavourites,
    changeShowModal,
    passPhotoInfo
  };
};
export default useApplicationData;