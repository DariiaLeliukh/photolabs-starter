import { useEffect, useReducer } from 'react';

const useApplicationData = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'showModal':
        return { ...state, isModalVisible: true, dataForModal: action.photos.find((element) => element.id === action.photoInfo.id) };
      case 'closeModal':
        return { ...state, isModalVisible: false, dataForModal: {} };
      case 'setFavorites':
        return { ...state, favorites: action.freshArray };
      case 'setPhotos':
        return { ...state, photoData: action.photos };
      case 'setTopics':
        return { ...state, topicData: action.topics };
      default:
        throw new Error();
    }
  };



  const [state, dispatch] = useReducer(reducer, {
    favorites: [],
    isModalVisible: false,
    dataForModal: {},
    photoData: [],
    topicData: []
  });

  //loading all photos once at entering the page
  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'setPhotos', photos: data });
      });
  }, []);

  //loading all topics once at entering the page
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'setTopics', topics: data });
      });
  }, []);

  //adds or removes item from favourites array
  const changeFavourites = (id) => {
    if (!state.favorites.includes(id)) {
      const freshArray = [...state.favorites, id];
      dispatch({ type: 'setFavorites', freshArray });
    } else {
      let freshArray = [];
      for (let i = 0; i < state.favorites.length; i++) {
        if (state.favorites[i] === id) {
          state.favorites.splice(i, 1);
          freshArray = [...state.favorites];
        }
      }
      dispatch({ type: 'setFavorites', freshArray });
    }
  };

  //shows modal and sets the image we want to get in the modal
  //fetching fresh data to get all the data including similar photos for simlar photos and so on
  const showModal = (photoInfo) => {
    fetch('http://localhost:8001/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'showModal', photoInfo, photos: data });
      });
  };

  //hiding modal
  const closeModal = () => {
    dispatch({ type: 'closeModal' });
  };

  return {
    state,
    changeFavourites,
    showModal,
    closeModal
  };
};
export default useApplicationData;