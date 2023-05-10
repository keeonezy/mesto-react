import React from "react";
import { api } from "../utils/Api";
import { Card } from "./Card";

function Main({ onEditAvatar, onCardClick, onEditProfile, onAddPlace }) {

    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getInitialCards(), api.getUserInfo()])
            .then(([card, user]) => {
                setCards(card);
                setUserName(user.name);
                setUserAvatar(user.avatar);
                setUserDescription(user.about);
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            })
    }, []);

    return (
        <main className="main">

            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={userAvatar} alt="Фотография пользователя" className="profile__avatar" />
                    <button className="profile__button-change" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userName}</h1>
                    <p className="profile__about">{userDescription}</p>
                    <button className="profile__button-edit" aria-label="Edit" type="button" onClick={onEditProfile}></button>
                </div>
                <button className="profile__button-add" aria-label="Add" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export { Main };