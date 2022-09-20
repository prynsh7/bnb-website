import React, { useState, useEffect } from "react";

import "./styles.scss";
import Logo from "./Logo";
import HamburgerButton from "./HamburgerButton";
import NavMenu from "./NavMenu";
import Links from "./Links";

const Navigation = () => {


  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navbarStyles = {
    position: 'fixed',
    height: '60px',
    width: '100%',
    backgroundColor: 'grey',
    textAlign: 'center'
  }

  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);





  const [isOpen, setIsOpen] = useState(false);

  const toggleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClosedNavigation = () => {
    setIsOpen(false);
  };

  return (
    <div className="navigation-container">
      <Logo />
      <NavMenu isOpen={isOpen} id='nav-content'>
        <Links isOpen={isOpen} closedNavigation={handleClosedNavigation} />
        <img id="nav_menu_grad" style={{width:"71.35%"},{ float:"right"}} src="https://techfest.org/2021/home/Navbar/TN.svg" alt="Navbar" />
      </NavMenu>

      <HamburgerButton toggleclick={toggleOnClick} isOpen={isOpen} />
    </div>
  );
};

export default Navigation;
