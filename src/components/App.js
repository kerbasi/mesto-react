import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithFrom from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);

  const handleEditAvatarClick = () => {
    setisEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setisEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setisAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const closeAllPopups = () => {
    setisEditAvatarPopupOpen(false);
    setisEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
  };

  return (
    <body className='page'>
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <Footer />

      <PopupWithFrom
        title='Редактировать профиль'
        name='person'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type='text'
          id='person-title-input'
          className='popup__input popup__input_type_title'
          name='title'
          minlength='2'
          maxlength='40'
          required
        />
        <span className='person-title-input-error popup__error'></span>
        <input
          type='text'
          id='person-data-input'
          className='popup__input popup__input_type_data'
          name='data'
          minlength='2'
          maxlength='200'
          required
        />
        <span className='person-data-input-error popup__error'></span>
        <button type='submit' className='popup__button'>
          Сохранить
        </button>
      </PopupWithFrom>

      <PopupWithFrom
        title='Новое место'
        name='add-image'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type='text'
          id='add-title-input'
          className='popup__input popup__input_type_title'
          name='title'
          placeholder='Название'
          minlength='2'
          maxlength='30'
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
        <button type='submit' className='popup__button'>
          Сохранить
        </button>
      </PopupWithFrom>

      <PopupWithFrom
        title='Обновить аватар'
        name='avatar'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
        <button type='submit' className='popup__button'>
          Сохранить
        </button>
      </PopupWithFrom>

      <PopupWithFrom title='Вы уверены?' name='delete-image'>
        <button type='submit' className='popup__button'>
          Да
        </button>
      </PopupWithFrom>

      <ImagePopup />

      <template id='element-template'>
        <article className='element'>
          <img className='element__image' src='#' alt='#' />
          <h2 className='element__title'>Изображение</h2>
          <div className='element__heart-wrapper'>
            <button className='element__heart-image' type='button'></button>
            <p className='element__heart-counter'></p>
          </div>
          <button className='element__trash-image' type='button'></button>
        </article>
      </template>
    </body>
  );
}

export default App;
