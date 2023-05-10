import React from "react";
import Avatar from "../images/Avatar.jpg"
import { api } from "../utils/Api";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
        Promise.all([api.getUserInfo()])
            .then(([user]) => {
                setUserName(user.name);
                setUserAvatar(user.avatar);
                setUserDescription(user.description);
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
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <p className="profile__about">Исследователь океана</p>
                    <button className="profile__button-edit" aria-label="Edit" type="button" onClick={onEditProfile}></button>
                </div>
                <button className="profile__button-add" aria-label="Add" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                <ul className="elements__list"></ul>
            </section>
        </main>
    )
}

export { Main };