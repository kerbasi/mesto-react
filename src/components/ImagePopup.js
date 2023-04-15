import crossPath from "../images/cross.svg";

function ImagePopup() {
  return (
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
  );
}

export default ImagePopup;
