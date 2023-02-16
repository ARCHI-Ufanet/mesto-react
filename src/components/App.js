import React from 'react';
import PopupEditProfile from '../../src/components/PopupEditProfile.js'
import PopupAddPlace from '../../src/components/PopupAddPlace.js'
import PopupEditAvatar from '../../src/components/PopupEditAvatar.js';
import PopupWithConfirm from '../../src/components/PopupWithConfirm.js';
import ImagePopup from '../../src/components/ImagePopup.js';
import Header from '../../src/components/Header.js';
import Main from '../../src/components/Main.js';
import Footer from '../../src/components/Footer.js'
import '../../src/index.css';

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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