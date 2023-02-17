import React from 'react';
import PopupWithForm from '../../src/components/PopupWithForm.js';

export default function PopupEditProfile({isOpen, onClose}) {
    return (
        <PopupWithForm 
            title = 'Редактировать'
            name = 'edit-profile'
            isOpen = {isOpen}
            onClose = {onClose}
            SbmtBtnText = 'Сохранить'
        >
            <input className="popup__input popup__input_type_profile-name" id="name" name="name" type="text" placeholder="Имя" required minLength="2" maxLength="40"/>
            <span className="popup__eror" id="name-error"></span>
            <input className="popup__input popup__input_type_profile-job" id="job" name="about" type="text"  placeholder="О себе" required minLength="2" maxLength="200"/>
            <span className="popup__eror" id="job-error"></span>
        </PopupWithForm>
    );
}