import React from 'react';
import PopupWithForm from '../../src/components/PopupWithForm.js';

export default function PopupWithConfirm({isOpen, onClose}) {
    return (
        <PopupWithForm 
            title = 'Вы уверены?'
            name = 'confirm'
            isOpen = {isOpen}
            onClose = {onClose}
            SbmtBtnText = 'Да'
        >
        </PopupWithForm>
    );
}