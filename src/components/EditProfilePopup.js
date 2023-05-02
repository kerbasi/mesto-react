import PopupWithForm from "./PopupWithForm";
import { useState, useContext } from "react";
import { CurrentUserContext } from "./contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose }) {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='person'
      isOpen={isOpen}
      onClose={onClose}
      buttonText='Сохранить'
    >
      <input
        type='text'
        id='person-title-input'
        className='popup__input popup__input_type_title'
        name='title'
        minLength='2'
        maxLength='40'
        required
        value={name}
        onChange={handleNameChange}
      />
      <span className='person-title-input-error popup__error'></span>
      <input
        type='text'
        id='person-data-input'
        className='popup__input popup__input_type_data'
        name='data'
        minLength='2'
        maxLength='200'
        required
        value={description}
        onChange={handleDescriptionChange}
      />
      <span className='person-data-input-error popup__error'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
