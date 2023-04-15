function Card(props) {
  const handleCardClick = () => {
    props.onCardClick(props.data);
  };

  return (
    <article className='element'>
      <img
        className='element__image'
        src={props.data.link}
        alt={props.data.name}
        onClick={handleCardClick}
      />
      <h2 className='element__title'>Изображение</h2>
      <div className='element__heart-wrapper'>
        <button className='element__heart-image' type='button'></button>
        <p className='element__heart-counter'></p>
      </div>
      <button className='element__trash-image' type='button'></button>
    </article>
  );
}

export default Card;
