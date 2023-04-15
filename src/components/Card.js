function Card({ onCardClick, data }) {
  const handleCardClick = () => {
    onCardClick(data);
  };

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
        <button className='element__heart-image' type='button'></button>
        <p className='element__heart-counter'></p>
      </div>
      <button className='element__trash-image' type='button'></button>
    </article>
  );
}

export default Card;
