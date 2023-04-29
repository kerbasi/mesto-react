import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext";
import plusPath from "../images/plus.svg";
import editPath from "../images/edit.svg";
import api from "../utils/api";
import Card from "./Card";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onClose,
}) {
  const [cards, setCards] = useState([]);
  const { name, about, avatar } = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className='main page__main'>
      <section className='profile'>
        <div className='profile__avatar-wrapper' onClick={onEditAvatar}>
          <img
            src={avatar}
            alt='аватар пользователя'
            className='profile__avatar'
          />
        </div>
        <div className='profile__info'>
          <h1 className='profile__info-title'>{name}</h1>
          <button
            type='button'
            className='profile__edit-button'
            onClick={onEditProfile}
          >
            <img
              className='profile__edit-image'
              src={editPath}
              alt='знак карандаша'
            />
          </button>
          <p className='profile__info-subtitle'>{about}</p>
        </div>
        <button
          type='button'
          className='profile__add-button'
          onClick={onAddPlace}
        >
          <img className='profile__add-image' src={plusPath} alt='знак плюс' />
        </button>
      </section>
      <section className='elements main__elements'>
        {cards.map((cardData) => (
          <Card
            key={cardData._id}
            data={cardData}
            onCardClick={onCardClick}
            onClose={onClose}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
