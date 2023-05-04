import PopupWithForm from "./PopupWithForm";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);
  const [buttonText, setButtonText] = useState("Сохранить");
  const [inputsValues, setInputsValues] = useState({
    title: currentUser.name,
    data: currentUser.about,
  });

  const handleChange = (e) => {
    setInputsValues({ ...inputsValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Сохранение...");
    onUpdateUser(
      {
        name: inputsValues.title,
        about: inputsValues.data,
      },
      () => {
        setButtonText("Сохранить");
      }
    );
  };

  return (
    <PopupWithForm
      title='Редактировать профиль'
      name='person'
      isOpen={isOpen}
      onClose={onClose}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        id='person-title-input'
        className='popup__input popup__input_type_title'
        name='title'
        minLength='2'
        maxLength='40'
        required
        value={inputsValues.title}
        onChange={handleChange}
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
        value={inputsValues.data}
        onChange={handleChange}
      />
      <span className='person-data-input-error popup__error'></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
