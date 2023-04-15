import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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

  return (
    <>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onClose={closeAllPopups}
      />

      <Footer />

      <PopupWithForm
        title='Редактировать профиль'
        name='person'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText='Сохранить'
      >
        <input
          type='text'
          id='person-title-input'
          className='popup__input popup__input_type_title'
          name='title'
          minLength='2'
          maxLength='40'
          required
        />
        <span className='person-title-input-error popup__error'></span>
        <input
          type='text'
          id='person-data-input'
          className='popup__input popup__input_type_data'
          name='data'
          minLength='2'
          maxLength='200'
          required
        />
        <span className='person-data-input-error popup__error'></span>
      </PopupWithForm>

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
    </>
  );
}

export default App;
