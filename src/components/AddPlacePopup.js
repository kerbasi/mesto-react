import PopupWithForm from "./PopupWithForm";
import { useState, useEffect } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [inputsValues, setInputsValues] = useState({ title: "", data: "" });
  const [buttonText, setButtonText] = useState("Сохранить");
  function handleChange(e) {
    setInputsValues({ ...inputsValues, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setButtonText("Сохранение...");
    onAddPlace(
      {
        name: inputsValues.title,
        link: inputsValues.data,
      },
      () => {
        setButtonText("Сохранить");
      }
    );
  }

  useEffect(() => {
    setInputsValues({ title: "", data: "" });
  }, [isOpen]);

  return (
    <PopupWithForm
      title='Новое место'
      name='add-image'
      isOpen={isOpen}
      onClose={onClose}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        id='add-title-input'
        className='popup__input popup__input_type_title'
        name='title'
        placeholder='Название'
        minLength='2'
        maxLength='30'
        required
        onChange={handleChange}
        value={inputsValues.title}
      />
      <span className='add-title-input-error popup__error'></span>
      <input
        type='url'
        id='add-data-input'
        className='popup__input popup__input_type_data'
        name='data'
        placeholder='Ссылка на картинку'
        required
        onChange={handleChange}
        value={inputsValues.data}
      />
      <span className='add-data-input-error popup__error'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
