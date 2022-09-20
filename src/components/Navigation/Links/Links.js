import { NavLink } from "react-router-dom";

import "./styles.scss";

const paths = [
  { name: "event", path: "/event" },
  { name: "gallery", path: "galery" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" }
  // , exact: true
];

const Links = ({ isOpen, closedNavigation }) => (
  <ul className={`navigation__list ${isOpen ? "navigation__list--open" : ""}`}>
    {paths.map((link) => (
      <li
        key={link.name}
        className="navigation__item"
        onClick={closedNavigation}
      >
        <NavLink
          className={`navigation__link ${
            window.matchMedia("(max-width: 767px)").matches && isOpen
              ? "linksFade"
              : ""
          }`}
          to={link.path}
          exact={link.exact && true}
        >
          {link.name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default Links;
