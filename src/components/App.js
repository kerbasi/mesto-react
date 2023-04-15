import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import crossPath from "../images/cross.svg";

function App() {
  return (
    <body class='page'>
      <Header />
      <Main />
      <Footer />

      <div class='popup popup_type_person'>
        <div class='popup__container'>
          <button type='reset' class='popup__cross'>
            <img
              src={crossPath}
              alt='иконка крестика'
              class='popup__cross-image'
            />
          </button>
          <h2 class='popup__title'>Редактировать профиль</h2>
          <form action='#' class='popup__form' name='profileForm' novalidate>
            <input
              type='text'
              id='person-title-input'
              class='popup__input popup__input_type_title'
              name='title'
              minlength='2'
              maxlength='40'
              required
            />
            <span class='person-title-input-error popup__error'></span>
            <input
              type='text'
              id='person-data-input'
              class='popup__input popup__input_type_data'
              name='data'
              minlength='2'
              maxlength='200'
              required
            />
            <span class='person-data-input-error popup__error'></span>
            <button type='submit' class='popup__button'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class='popup popup_type_add-image'>
        <div class='popup__container'>
          <button type='reset' class='popup__cross'>
            <img
              src={crossPath}
              alt='иконка крестика'
              class='popup__cross-image'
            />
          </button>
          <h2 class='popup__title'>Новое место</h2>
          <form action='#' class='popup__form' name='imageForm' novalidate>
            <input
              type='text'
              id='add-title-input'
              class='popup__input popup__input_type_title'
              name='title'
              placeholder='Название'
              minlength='2'
              maxlength='30'
              required
            />
            <span class='add-title-input-error popup__error'></span>
            <input
              type='url'
              id='add-data-input'
              class='popup__input popup__input_type_data'
              name='data'
              placeholder='Ссылка на картинку'
              required
            />
            <span class='add-data-input-error popup__error'></span>
            <button type='submit' class='popup__button'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class='popup popup_type_avatar'>
        <div class='popup__container popup__container_type_avatar'>
          <button type='reset' class='popup__cross'>
            <img
              src={crossPath}
              alt='иконка крестика'
              class='popup__cross-image'
            />
          </button>
          <h2 class='popup__title'>Обновить аватар</h2>
          <form action='#' class='popup__form' name='avatarForm' novalidate>
            <input
              type='url'
              id='avatar-data-input'
              class='popup__input popup__input_type_data'
              name='data'
              placeholder='Ссылка на картинку'
              required
            />
            <span class='avatar-data-input-error popup__error'></span>
            <button type='submit' class='popup__button'>
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div class='popup popup_type_image'>
        <div class='popup__container popup__container_type_image'>
          <button type='reset' class='popup__cross'>
            <img
              src={crossPath}
              alt='иконка крестика'
              class='popup__cross-image'
            />
          </button>
          <img class='popup__image' src='#' alt='увеличенное изображение' />
          <h2 class='popup__title popup__title_type_image'>#</h2>
        </div>
      </div>
      <div class='popup popup_type_delete-image'>
        <div class='popup__container popup__container_type_submit'>
          <button type='reset' class='popup__cross'>
            <img
              src={crossPath}
              alt='иконка крестика'
              class='popup__cross-image'
            />
          </button>
          <h2 class='popup__title popup__title_type_submit'>Вы уверены?</h2>
          <form action='#' class='popup__form' name='deleteForm' novalidate>
            <button type='submit' class='popup__button'>
              Да
            </button>
          </form>
        </div>
      </div>
      <template id='element-template'>
        <article class='element'>
          <img class='element__image' src='#' alt='#' />
          <h2 class='element__title'>Изображение</h2>
          <div class='element__heart-wrapper'>
            <button class='element__heart-image' type='button'></button>
            <p class='element__heart-counter'></p>
          </div>
          <button class='element__trash-image' type='button'></button>
        </article>
      </template>
    </body>
  );
}

export default App;
