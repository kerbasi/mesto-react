import { useState, useEffect } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../components/contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEditAvatarClick = () => {
    setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setisEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  const handleCardLike = (card) => {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  };

  const handleCardDelete = (card) => {
    api.deleteCard(card._id).then((cards) => console.log(cards));
  };

  const handleUpdateUser = ({ name, about }) => {
    api.setUserInfo({ title: name, data: about }).then((user) => {
      console.log(user);
      setCurrentUser(user);
      closeAllPopups();
    });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />

      {currentUser && (
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onClose={closeAllPopups}
          onCardLike={handleCardLike}
          cards={cards}
          onCardDelete={handleCardDelete}
        />
      )}

      <Footer />

      {currentUser && (
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
      )}

      <PopupWithForm
        title='Новое место'
        name='add-image'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
      >
        <input
          type='text'
          id='add-title-input'
          className='popup__input popup__input_type_title'
          name='title'
          placeholder='Название'
          minLength='2'
          maxLength='30'
          required
        />
        <span className='add-title-input-error popup__error'></span>
        <input
          type='url'
          id='add-data-input'
          className='popup__input popup__input_type_data'
          name='data'
          placeholder='Ссылка на картинку'
          required
        />
        <span className='add-data-input-error popup__error'></span>
      </PopupWithForm>

      <PopupWithForm
        title='Обновить аватар'
        name='avatar'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
      >
        <input
          type='url'
          id='avatar-data-input'
          className='popup__input popup__input_type_data'
          name='data'
          placeholder='Ссылка на картинку'
          required
        />
        <span className='avatar-data-input-error popup__error'></span>
      </PopupWithForm>

      <PopupWithForm title='Вы уверены?' name='delete-image'>
        <button type='submit' className='popup__button'>
          Да
        </button>
      </PopupWithForm>

      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
