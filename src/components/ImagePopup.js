import crossPath from "../images/cross.svg";

function ImagePopup(props) {
  const className = props.card
    ? `popup popup_type_image popup_opened`
    : `popup popup_type_image`;

  return (
    <div className={className}>
      <div className='popup__container popup__container_type_image'>
        <button type='reset' className='popup__cross'>
          <img
            src={crossPath}
            alt='иконка крестика'
            className='popup__cross-image'
            onClick={props.onClose}
          />
        </button>
        <img
          className='popup__image'
          src={props.card ? props.card.link : "#"}
          alt='увеличенное изображение'
        />
        <h2 className='popup__title popup__title_type_image'>
          {props.card.name}
        </h2>
      </div>
    </div>
  );
}

export default ImagePopup;
