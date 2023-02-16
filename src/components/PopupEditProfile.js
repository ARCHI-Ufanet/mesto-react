import React from 'react';
import PopupWithForm from '../../src/components/PopupWithForm.js';

export default function PopupEditProfile(props) {
    return (
        <PopupWithForm 
            title = 'Редактировать'
            name = 'edit-profile'
            isOpen = {props.isOpen}
            onClose = {props.onClose}
        >
            <input className="popup__input popup__input_type_profile-name" id="name" name="name" type="text" placeholder="Имя" required minLength="2" maxLength="40"/>
            <span className="popup__eror" id="name-error"></span>
            <input className="popup__input popup__input_type_profile-job" id="job" name="about" type="text"  placeholder="О себе" required minLength="2" maxLength="200"/>
            <span className="popup__eror" id="job-error"></span>
            <button className="popup__submit-button" type="submit">Сохранить</button>
        </PopupWithForm>
    );
}