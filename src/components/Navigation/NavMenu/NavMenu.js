import React, {useState, useEffect } from "react";

import "./styles.scss";

const NavMenu = ({ children }) => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // new function:
  const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible((prevScrollPos > currentScrollPos ) || currentScrollPos < 10);

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);




    return(

<nav className={`navigation`}  style={{marginTop: visible ? '0' : '-100px'}} >{children}</nav>
    );
}


export default NavMenu;
