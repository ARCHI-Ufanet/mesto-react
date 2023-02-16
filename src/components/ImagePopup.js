import React from 'react';

export default function ImagePopup(props) {
    return (
        <section className={props.isOpen ? `popup popup_opened popup_type_show-image` : `popup popup_type_show-image`}>
            <div className="popup__container popup__container_type_show-image">
                <button onClick={props.onClose} className="popup__close-button" type="button"></button>
                <img src={props.card.link} alt={props.card.name} className="popup__image"/>
                <h2 className="popup__image-title">{props.card.name}</h2>
            </div>
        </section>
    );
};