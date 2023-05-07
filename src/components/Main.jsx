import React from "react";
import Avatar from "../images/Avatar.jpg"

function Main() {
    function handleEditAvatarClick() {
        const popup = document.querySelector(".popup_type_avatar");
        popup.classList.add("popup_opened");
    }
    function handleEditProfileClick() {
        const popup = document.querySelector(".popup_type_profile");
        popup.classList.add("popup_opened");
    }
    const handleAddPlaceClick = () => {
        const popup = document.querySelector(".popup_type_card");
        popup.classList.add("popup_opened");
    };

    return (
        <main className="main">

            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={Avatar} alt="Фотография пользователя"
                        className="profile__avatar" />
                    <button className="profile__button-change" onClick={handleEditAvatarClick}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <p className="profile__about">Исследователь океана</p>
                    <button className="profile__button-edit" aria-label="Edit" type="button" onClick={handleEditProfileClick}></button>
                </div>
                <button className="profile__button-add" aria-label="Add" type="button" onClick={handleAddPlaceClick}></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                </ul>
            </section>
        </main>
    )
}

export { Main };