import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import {api} from '../../src/utils/Api.js';
import PopupEditProfile from './PopupEditProfile.js'
import PopupAddPlace from './PopupAddPlace.js'
import PopupEditAvatar from './PopupEditAvatar.js';
import PopupWithConfirm from './PopupWithConfirm.js';
import ImagePopup from './ImagePopup.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  function handleEditProfileClick() {setIsEditProfilePopupOpen(true)};
  function handleAddPlaceClick() {setIsAddPlacePopupOpen(true)};
  function handleEditAvatarClick() {setIsEditAvatarPopupOpen(true)};
  function handleConfirm() {setIsConfirmPopupOpen(true)};
  function handleCardClick(card) {setSelectedCard(card); setIsImagePopupOpen(true)};
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmPopupOpen(false);
    setIsImagePopupOpen(false);
  }
  useEffect(() => {
    const me = api.getUserInfo();
    const cards = api.getInitialCards();
    Promise.all([me, cards])
        .then(([me, cards]) => {
          setCurrentUser(me);
          setCards(cards);
        })
        .catch((err) => {
          console.log(err);
        }); 
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      api.likeCard(card._id, !isLiked)
        .then((newCard) => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api.unlikeCard(card._id, isLiked)
        .then((newCard) => {
          setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  function handleCardDel(card) {
      api.delCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter(c => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleUpdateUser(data) {
    api.patchUserInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleUpdateAvatar(avatar) {
    api.patchUserAvatar(avatar)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleAddPlace(data) {
    api.postCard(data)
    .then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onCardClick = {handleCardClick}
        onCardLike = {handleCardLike}
        onCardDel = {handleCardDel}
        cards = {cards}
      />
      <Footer />

      <PopupEditProfile
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
        onUpdateUser = {handleUpdateUser}
      />

      <PopupAddPlace 
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
        onAddPlace = {handleAddPlace}
      />

      <PopupEditAvatar
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
        onUpdateAvatar = {handleUpdateAvatar}
      />

      <PopupWithConfirm 
        isOpen = {isConfirmPopupOpen}
        onClose = {closeAllPopups}
        onConfirm = {handleConfirm}
      />

      <ImagePopup
        isOpen = {isImagePopupOpen}
        onClose = {closeAllPopups}
        card = {selectedCard}
      />
    </CurrentUserContext.Provider>
  );
};