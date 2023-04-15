import "./App.css";

function App() {
  return (
    <body class='page'>
      <header class='header page__header'>
        <img
          src="<%=require('./images/logo.svg')%>"
          alt='лого место'
          class='header__logo'
        />
      </header>
      <main class='main page__main'>
        <section class='profile'>
          <div class='profile__avatar-wrapper'>
            <img src='#' alt='аватар пользователя' class='profile__avatar' />
          </div>
          <div class='profile__info'>
            <h1 class='profile__info-title'></h1>
            <button type='button' class='profile__edit-button'>
              <img
                class='profile__edit-image'
                src="<%=require('./images/edit.svg')%>"
                alt='знак карандаша'
              />
            </button>
            <p class='profile__info-subtitle'></p>
          </div>
          <button type='button' class='profile__add-button'>
            <img
              class='profile__add-image'
              src="<%=require('./images/plus.svg')%>"
              alt='знак плюс'
            />
          </button>
        </section>
        <section class='elements main__elements'></section>
      </main>
      <footer class='footer page__footer'>
        <p class='footer__copyright' lang='eu'>
          © 2023 Mesto Russia
        </p>
      </footer>
      <div class='popup popup_type_person'>
        <div class='popup__container'>
          <button type='reset' class='popup__cross'>
            <img
              src="<%=require('./images/cross.svg')%>"
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
              src="<%=require('./images/cross.svg')%>"
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
              src="<%=require('./images/cross.svg')%>"
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
              src="<%=require('./images/cross.svg')%>"
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
              src="<%=require('./images/cross.svg')%>"
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
