import plusPath from "../images/plus.svg";
import editPath from "../images/edit.svg";

function Main(props) {
  return (
    <main className='main page__main'>
      <section className='profile'>
        <div className='profile__avatar-wrapper' onClick={props.onEditAvatar}>
          <img src='#' alt='аватар пользователя' className='profile__avatar' />
        </div>
        <div className='profile__info'>
          <h1 className='profile__info-title'></h1>
          <button
            type='button'
            className='profile__edit-button'
            onClick={props.onEditProfile}
          >
            <img
              className='profile__edit-image'
              src={editPath}
              alt='знак карандаша'
            />
          </button>
          <p className='profile__info-subtitle'></p>
        </div>
        <button
          type='button'
          className='profile__add-button'
          onClick={props.onAddPlace}
        >
          <img className='profile__add-image' src={plusPath} alt='знак плюс' />
        </button>
      </section>
      <section className='elements main__elements'></section>
    </main>
  );
}

export default Main;
