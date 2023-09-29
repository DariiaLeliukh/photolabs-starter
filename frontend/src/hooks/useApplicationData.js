import { useState } from 'react';
import photos from '../mocks/photos';

const useApplicationData = () => {
  const [state, setState] = useState({
    favorites: [],
    isModalVisible: false,
    dataForModal: {},
  });

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

  const showModal = (photoInfo) => {
    const fullPhotoInfo = photos.find((element) => element.id === photoInfo.id);
    setState({ ...state, isModalVisible: true, dataForModal: fullPhotoInfo });
  };

  const closeModal = () => {
    setState({ ...state, isModalVisible: false, dataForModal: {} });
  };

  return {
    state,
    changeFavourites,
    showModal,
    closeModal
  };
};
export default useApplicationData;