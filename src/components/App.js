import React, { useState, useEffect } from 'react';
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
    selectedCard({});
  }

  return (
    <>
      <Header />
      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
        onConfirm = {handleConfirm}
        onCardClick = {handleCardClick}
      />
      <Footer />

      <PopupEditProfile
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
      />

      <PopupAddPlace 
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
      />

      <PopupEditAvatar
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
      />

      <PopupWithConfirm 
        isOpen = {isConfirmPopupOpen}
        onClose = {closeAllPopups}
      />

      <ImagePopup
        isOpen = {isImagePopupOpen}
        onClose = {closeAllPopups}
        card = {selectedCard}
      />
    </>
  );
};