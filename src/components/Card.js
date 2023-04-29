import { useContext } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function Card({ onCardClick, data }) {
  const currentUser = useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick(data);
  };

  const isOwn = data.owner._id === currentUser._id;
  const isLiked = data.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__heart-image ${
    isLiked && "element__heart-image_active"
  }`;

  return (
    <article className='element'>
      <img
        className='element__image'
        src={data.link}
        alt={data.name}
        onClick={handleCardClick}
      />
      <h2 className='element__title'>{data.name}</h2>
      <div className='element__heart-wrapper'>
        <button className={cardLikeButtonClassName} type='button'></button>
        <p className='element__heart-counter'></p>
      </div>
      {isOwn && (
        <button className='element__trash-image' type='button'></button>
      )}
    </article>
  );
}

export default Card;
