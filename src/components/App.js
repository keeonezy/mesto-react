import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { ImagePopup } from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from "../utils/Api";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditDeletePopupOpen, setIsEditDeletePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, user]) => {
        setCards(cards);
        setCurrentUser(user);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
  }, []);

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (!isLiked) {
      api.setlike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
    else {
      api.deleteLike(card._id)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  }

  function handleDeleteCard(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((item) => item._id !== card._id));
      })
      .then(() => closeAllPopups())
      .catch((err) => {
        console.log(`в App Ошибка: ${err}`);
      });
  }

  function handleUpdateUser(data) {
    api.editUserInfo(data)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  <PopupWithForm title={'Вы уверены?'}
    isOpen={isEditDeletePopupOpen}
    onClose={closeAllPopups}
    textButton="Да">
  </PopupWithForm>

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Header />
          <Main
            cards={cards}
            onEditProfile={handleEditProfileClick}
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteCard}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>

      </div >
    </CurrentUserContext.Provider>
  );
}

export { App };