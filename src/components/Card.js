import React from 'react';

export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    };

    return (
        <article className="cards__container">
            <div onClick={handleClick} style={{ backgroundImage: `url(${props.card.link})` }} className="cards__image"></div>
            <button type="button" className="cards__del-button"></button>
            <div className="cards__description">
                <h2 className="cards__title">{props.card.name}</h2>
                <div className="likes">
                    <button className="cards__like-button" type="button"></button>
                    <p className="cards__likes">{props.card.likes.length}</p>
                </div> 
            </div>
        </article>
    )
}