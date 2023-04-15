import crossPath from "../images/cross.svg";

function PopupWithFrom(props) {
  return (
    <div class={`popup popup_type_${props.name}`}>
      <div class='popup__container'>
        <button type='reset' class='popup__cross'>
          <img
            src={crossPath}
            alt='иконка крестика'
            class='popup__cross-image'
          />
        </button>
        <h2 class='popup__title'>{props.title}</h2>
        <form action='#' class='popup__form' name={props.name} novalidate>
          {props.children}
        </form>
      </div>
    </div>
  );
}

export default PopupWithFrom;
