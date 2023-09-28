import { useState } from 'react';

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

  const changeShowModal = (photoInfo) => {
    if (state.isModalVisible) {
      setState({ ...state, isModalVisible: false, dataForModal: {} });
      return;
    }
    setState({ ...state, isModalVisible: true, dataForModal: photoInfo });
  };

  return {
    state,
    changeFavourites,
    changeShowModal,
  };
};
export default useApplicationData;