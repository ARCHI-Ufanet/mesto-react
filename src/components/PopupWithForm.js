import React from 'react';

export default function PopupWithForm(props) {
    return (
        <section className={props.isOpen ? `popup popup_opened popup_type_${props.name}` : `popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button onClick={props.onClose} type="button" className="popup__close-button"></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className={`popup__form popup__form_type_${props.name}`} name={props.name}  onSubmit={props.onSubmit} noValidate>
                    {props.children}
                    <button className="popup__submit-button" type="submit">{props.SbmtBtnText}</button>
                </form>
            </div>
        </section>
    );
}