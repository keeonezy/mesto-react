import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { ImagePopup } from "./components/ImagePopup";
import { PopupWithForm } from "./components/PopupWithForm";

function App() {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
  }

  return (
    <>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
          />
          <Footer />

          <PopupWithForm title={'Новое место'} isOpen={isAddPlacePopupOpen} name="card-add" onClose={closeAllPopups} textButton="Сохранить">
            <div class="popup__section">
              <input type="text" placeholder="Название" name="name" minlength="2" maxlength="30" className="popup__input popup__input_type_name" required />
              <span class="popup__error"></span>
            </div>
            <div class="popup__section">
              <input type="url" placeholder="Ссылка на картинку" name="link" className="popup__input popup__input_type_url" required />
              <span class="popup__error"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} name="avatar" onClose={closeAllPopups} textButton="Сохранить">
            <div class="popup__section">
              <input type="url" placeholder="Ссылка на картинку" name="avatarInput" className="popup__input popup__input_type_url" required />
              <span class="popup__error"></span>
            </div>
          </PopupWithForm>

          <PopupWithForm title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} name="info" onClose={closeAllPopups} textButton="Сохранить">
            <div class="popup__section">
              <input type="text" placeholder="Имя" name="name" minlength="2" maxlength="40" className="popup__input popup__input_type_name" required />
              <span class="popup__error"></span>
            </div>
            <div class="popup__section">
              <input type="text" placeholder="Вид деятельности" name="about" minlength="2" maxlength="200" className="popup__input popup__input_type_job" required />
              <span class="popup__error"></span>
            </div>
          </PopupWithForm>

        </div>

        <template className="card-li">
          <li className="card">
            <button className="card__trash" type="button"></button>
            <img src="#" alt="#" className="card__image" />
            <div className="card__info">
              <h2 className="card__title">1</h2>

              <div className="card__like-container">
                <button className="card__like" type="button"></button>
                <p className="card__like-number">0</p>
              </div>
            </div>
          </li>
        </template>

      </div >
    </>

  );
}

export default App;
