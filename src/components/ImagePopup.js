import React from 'react';

export default function ImagePopup({isOpen, card, onClose}) {
    return (
        <section className={isOpen ? `popup popup_opened popup_type_show-image` : `popup popup_type_show-image`}>
            <div className="popup__container popup__container_type_show-image">
                <button onClick={onClose} className="popup__close-button" type="button"></button>
                <img src={card.link} alt={card.name} className="popup__image"/>
                <h2 className="popup__image-title">{card.name}</h2>
            </div>
        </section>
    );
};