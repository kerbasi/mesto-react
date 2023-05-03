import crossPath from "../images/cross.svg";
import { useRef } from "react";
import FormValidator, { options } from "../utils/FormValidator";

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
}) {
  const formRef = useRef();
  const popupClassName = isOpen
    ? `popup popup_type_${name} popup_opened`
    : `popup popup_type_${name}`;
  const containerClassName =
    name === "delete-image"
      ? `popup__container popup__container_type_submit`
      : `popup__container`;
  let validation;
  if (formRef.current) {
    validation = new FormValidator(options, formRef.current);
    validation.enableValidation();
  }

  return (
    <div className={popupClassName}>
      <div className={containerClassName}>
        <button type='reset' className='popup__cross' onClick={onClose}>
          <img
            src={crossPath}
            alt='иконка крестика'
            className='popup__cross-image'
          />
        </button>
        <h2 className='popup__title'>{title}</h2>
        <form
          ref={formRef}
          action='#'
          className='popup__form'
          name={name}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button type='submit' className='popup__button'>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
