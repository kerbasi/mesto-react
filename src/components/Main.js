import plusPath from "../images/plus.svg";
import editPath from "../images/edit.svg";

function Main() {
  const handleEditAvatarClick = () => {
    document.querySelector(".popup_type_avatar").classList.add("popup_opened");
  };

  const handleEditProfileClick = () => {
    document.querySelector(".popup_type_person").classList.add("popup_opened");
  };

  const handleAddPlaceClick = () => {
    document
      .querySelector(".popup_type_add-image")
      .classList.add("popup_opened");
  };

  return (
    <main class='main page__main'>
      <section class='profile'>
        <div class='profile__avatar-wrapper' onClick={handleEditAvatarClick}>
          <img src='#' alt='аватар пользователя' class='profile__avatar' />
        </div>
        <div class='profile__info'>
          <h1 class='profile__info-title'></h1>
          <button
            type='button'
            class='profile__edit-button'
            onClick={handleEditProfileClick}
          >
            <img
              class='profile__edit-image'
              src={editPath}
              alt='знак карандаша'
            />
          </button>
          <p class='profile__info-subtitle'></p>
        </div>
        <button
          type='button'
          class='profile__add-button'
          onClick={handleAddPlaceClick}
        >
          <img class='profile__add-image' src={plusPath} alt='знак плюс' />
        </button>
      </section>
      <section class='elements main__elements'></section>
    </main>
  );
}

export default Main;
