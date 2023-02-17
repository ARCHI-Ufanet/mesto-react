import React from 'react';
import PopupWithForm from '../../src/components/PopupWithForm.js';

export default function PopupAddPlace({isOpen, onClose}) {
    return (
        <PopupWithForm 
            title = 'Новое место'
            name = 'add-card'
            isOpen = {isOpen}
            onClose = {onClose}
            SbmtBtnText = 'Сохранить'
        >
            <input className="popup__input popup__input_type_title" id="title" name="name" type="text" placeholder="Название" required minLength="2" maxLength="30"/>
            <span className="popup__eror" id="title-error"></span>
            <input className="popup__input popup__input_type_link" name="link" id="link" type="url" placeholder="Ссылка на картинку" required/>
            <span className="popup__eror" id="link-error"></span>
        </PopupWithForm>
    );
}