import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { ImagePopup } from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditDeletePopupOpen, setIsEditDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditDeletePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm title={'Новое место'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <div className="popup__section">
            <input type="text" placeholder="Название" name="name" minLength="2" maxLength="30" className="popup__input popup__input_type_name" required />
            <span className="popup__error"></span>
          </div>
          <div className="popup__section">
            <input type="url" placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_type_url" required />
            <span className="popup__error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <div className="popup__section">
            <input type="url" placeholder="Ссылка на картинку" name="avatarInput" className="popup__input popup__input_type_url" required />
            <span className="popup__error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <div className="popup__section">
            <input type="text" placeholder="Имя" name="name" minLength="2" maxLength="40" className="popup__input popup__input_type_name" required />
            <span className="popup__error"></span>
          </div>
          <div className="popup__section">
            <input type="text" placeholder="Вид деятельности" name="about" minLength="2" maxLength="200" className="popup__input popup__input_type_job" required />
            <span className="popup__error"></span>
          </div>
        </PopupWithForm>

        <PopupWithForm title={'Вы уверены?'} isOpen={isEditDeletePopupOpen} onClose={closeAllPopups} textButton="Да"></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      </div>

    </div >
  );
}

export { App };