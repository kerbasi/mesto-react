﻿import PopupWithForm from "./PopupWithForm";
import { useRef, useState, useEffect } from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameInputRef = useRef();
  const linkInputRef = useRef();
  const [buttonText, setButtonText] = useState("Сохранить");
  function handleSubmit(e) {
    e.preventDefault();
    setButtonText("Сохранение...");
    onAddPlace(
      {
        name: nameInputRef.current.value,
        link: linkInputRef.current.value,
      },
      (text) => {
        setButtonText(text);
      }
    );
  }

  useEffect(() => {
    nameInputRef.current.value = "";
    linkInputRef.current.value = "";
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
        ref={nameInputRef}
        type='text'
        id='add-title-input'
        className='popup__input popup__input_type_title'
        name='title'
        placeholder='Название'
        minLength='2'
        maxLength='30'
        required
      />
      <span className='add-title-input-error popup__error'></span>
      <input
        ref={linkInputRef}
        type='url'
        id='add-data-input'
        className='popup__input popup__input_type_data'
        name='data'
        placeholder='Ссылка на картинку'
        required
      />
      <span className='add-data-input-error popup__error'></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;