import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {

  // function handleEditAvatarClick() {
  //   setIsEditAvatarPopupOpen(true);
  // }

  // function handleAddPlaceClick() {
  //   setIsAddPlacePopupOpen(true);
  // }

  // function handleEditProfileClick() {
  //   setIsEditProfilePopupOpen(true);
  // }

  // function handleCardClick(card) {
  //   setSelectedCard(card);
  // }

  return (
    <>
      <div className="body">
        <div className="page">
          <Header />
          <Main
          // onEditAvatar={handleEditAvatarClick}
          // onEditProfile={handleEditProfileClick}
          // onAddPlace={handleAddPlaceClick}
          // onCardClick={handleCardClick}
          />
          <Footer />

          <div className="popup popup_type_avatar">
            <div className="popup__group popup__group-avatar">
              <button className="popup__close" type="button"></button>
              <h2 className="popup__title">Обновить аватар</h2>
              <form className="popup__form" name="changeAvatar" novalidate>
                <div className="popup__section">
                  <input type="url" placeholder="Ссылка на картинку" name="link"
                    className="popup__input popup__input_type_url" required />
                  <span className="popup__error"></span>
                </div>
                <button className="popup__button" type="submit">Сохранить</button>
              </form>
            </div>
          </div>

          <div className="popup popup_type_profile">
            <div className="popup__group">
              <button className="popup__close" aria-label="Close" type="button"></button>
              <h2 className="popup__title">Редактировать профиль</h2>
              <form className="popup__form" name="editProfile" novalidate>
                <div className="popup__section">
                  <input type="text" placeholder="Имя" name="name" minlength="2" maxlength="40"
                    className="popup__input popup__input_type_name" required />
                  <span className="popup__error"></span>
                </div>
                <div className="popup__section">
                  <input type="text" placeholder="Вид деятельности" name="about" minlength="2" maxlength="200"
                    className="popup__input popup__input_type_job" required />
                  <span className="popup__error"></span>
                </div>
                <button className="popup__button" type="submit">Сохранить</button>
              </form>
            </div>
          </div>

          <div className="popup popup_type_card">
            <div className="popup__group">
              <button className="popup__close" type="button"></button>
              <h2 className="popup__title">Новое место</h2>
              <form className="popup__form" name="addCard" novalidate>
                <div className="popup__section">
                  <input type="text" placeholder="Название" name="name" minlength="2" maxlength="30"
                    className="popup__input popup__input_type_name" required />
                  <span className="popup__error"></span>
                </div>
                <div className="popup__section">
                  <input type="url" placeholder="Ссылка на картинку" name="link"
                    className="popup__input popup__input_type_url" required />
                  <span className="popup__error"></span>
                </div>
                <button className="popup__button" type="submit">Создать</button>
              </form>
            </div>
          </div>

          <div className="popup popup_type_enter">
            <div className="popup__group">
              <button className="popup__close" type="button"></button>
              <h2 className="popup__title">Вы уверены?</h2>
              <form className="popup__form" name="enter" novalidate>
                <button className="popup__button" type="submit">Да</button>
              </form>
            </div>
          </div>

          <div className="popup popup_type_image">
            <figure className="popup__images">
              <button className="popup__close" type="button"></button>
              <img src="#" alt="#" className="popup__image" />
              <figcaption className="popup__figcaption"></figcaption>
            </figure>
          </div>

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

      </div>
    </>


  );
}

export default App;
