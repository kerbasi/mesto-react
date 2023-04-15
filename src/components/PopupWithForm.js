import crossPath from "../images/cross.svg";

function PopupWithForm(props) {
  const className = props.isOpen
    ? `popup popup_type_${props.name} popup_opened`
    : `popup popup_type_${props.name}`;
  return (
    <div className={className}>
      <div className='popup__container'>
        <button type='reset' className='popup__cross' onClick={props.onClose}>
          <img
            src={crossPath}
            alt='иконка крестика'
            className='popup__cross-image'
          />
        </button>
        <h2 className='popup__title'>{props.title}</h2>
        <form action='#' className='popup__form' name={props.name} noValidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
