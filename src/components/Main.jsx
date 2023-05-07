import React from "react";
import Avatar from "../images/Avatar.jpg"

function Main() {
    return (
        <main className="main">

            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={Avatar} alt="Фотография пользователя"
                        className="profile__avatar" />
                    <button className="profile__button-change"></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <p className="profile__about">Исследователь океана</p>
                    <button className="profile__button-edit" aria-label="Edit" type="button"></button>
                </div>
                <button className="profile__button-add" aria-label="Add" type="button"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>
        </main>
    )
}

export { Main };