import React from 'react';
import PopupWithForm from '../../src/components/PopupWithForm.js';

export default function PopupEditAvatar(props) {
    return (
        <PopupWithForm 
            title = 'Обновить аватар'
            name = 'change-avatar'
            isOpen = {props.isOpen}
            onClose = {props.onClose}
        >
            <input className="popup__input popup__input_type_link-avatar" name="avatar" id="avatarLink" type="url" placeholder="Ссылка на аватар" required/>
            <span className="popup__eror" id="avatarLink-error"></span>
            <button className="popup__submit-button" type="submit">Сохранить</button>
        </PopupWithForm>
    );
}