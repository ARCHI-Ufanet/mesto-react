import React, { useState, useEffect } from 'react';
import {api} from '../../src/utils/Api.js';
import Card from './Card.js';

export default function Main(props) {
    const [userAvatar, setUserAvatar] = useState('#');
    const [userName, setUserName] = useState('#');
    const [userDescription, setUserDescription] = useState('#');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const me = api.getUserInfo();
        const cards = api.getInitialCards();
    
        Promise.all([me, cards])
            .then(([me, cards]) => {
                setUserAvatar(me.avatar);
                setUserName(me.name);
                setUserDescription(me.about);
                setCards(cards)
            })
            .catch((err) => {
                console.log(err);
            }); 
    }, []); 
    
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-box">
                    <div onClick={props.onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}  className="profile__avatar"/>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__job">{userDescription}</p>
                    <button onClick={props.onEditProfile} className="profile__edit-button"  type="button"></button>
                </div>
                <button onClick={props.onAddPlace} className="profile__add-card-button" type="button"></button>
            </section>
            <section className="cards">
                {cards.map((card, _id) => (
                    <Card
                        key = {card._id}
                        card = {card}
                        onCardClick = {props.onCardClick}
                    />
                    ))}
            </section>
        </main>
    );
};