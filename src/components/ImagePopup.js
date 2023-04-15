import crossPath from "../images/cross.svg";

function ImagePopup() {
  return (
    <div className='popup popup_type_image'>
      <div className='popup__container popup__container_type_image'>
        <button type='reset' className='popup__cross'>
          <img
            src={crossPath}
            alt='иконка крестика'
            className='popup__cross-image'
          />
        </button>
        <img className='popup__image' src='#' alt='увеличенное изображение' />
        <h2 className='popup__title popup__title_type_image'>#</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
