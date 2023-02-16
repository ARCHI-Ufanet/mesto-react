import React from 'react';
import PopupWithForm from '../../src/components/PopupWithForm.js';

export default function PopupWithConfirm(props) {
    return (
        <PopupWithForm 
            title = 'Вы уверены?'
            name = 'confirm'
            isOpen = {props.isOpen}
            onClose = {props.onClose}
        >
            <button className="popup__submit-button" type="submit">Да</button>
        </PopupWithForm>
    );
}