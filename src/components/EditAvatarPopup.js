import PopupWithForm from "./PopupWithForm";
import { useRef } from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  const inputRef = useRef();

  return (
    <PopupWithForm
      title='Обновить аватар'
      name='avatar'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
      onSubmit={handleSubmit}
    >
      <input
        ref={inputRef}
        type='url'
        id='avatar-data-input'
        className='popup__input popup__input_type_data'
        name='data'
        placeholder='Ссылка на картинку'
        required
      />
      <span className='avatar-data-input-error popup__error'></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
