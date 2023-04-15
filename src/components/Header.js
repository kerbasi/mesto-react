import logoPath from "../images/logo.svg";

function Header() {
  return (
    <header class='header page__header'>
      <img src={logoPath} alt='лого место' class='header__logo' />
    </header>
  );
}

export default Header;
