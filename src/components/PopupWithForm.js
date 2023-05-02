import crossPath from "../images/cross.svg";

function PopupWithForm({
  title,
  name,
  isOpen,
  onClose,
  children,
  buttonText,
  onSubmit,
}) {
  const className = isOpen
    ? `popup popup_type_${name} popup_opened`
    : `popup popup_type_${name}`;
  return (
    <div className={className}>
      <div className='popup__container'>
        <button type='reset' className='popup__cross' onClick={onClose}>
          <img
            src={crossPath}
            alt='иконка крестика'
            className='popup__cross-image'
          />
        </button>
        <h2 className='popup__title'>{title}</h2>
        <form
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
