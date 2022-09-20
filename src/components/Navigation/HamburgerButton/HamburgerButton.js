import "./styles.scss";

const HamburgerButton = ({ toggleclick, isOpen }) => (
  <button
    className={`header__hamburgerButton ${isOpen ? "active" : ""}`}
    type="button"
    aria-expanded="false"
    onClick={toggleclick}
  >
    <span className="sr-only">Menu</span>
    <div className="header__firstLine"></div>
  </button>
);

export default HamburgerButton;
