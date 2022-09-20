import React, {useState, useEffect} from "react";
import MusicLogo from "./logo-fav.png";

import "./styles.scss";

const Logo = () => {

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

  return (
  <div className="header__logoContainer">
    {/* <img
      className="header__logoImg"
      src={MusicLogo}
      alt="personal logo surname with the guitar pattern"
    /> */}
    <a href="/">
        <img id="logo-img"  src="https://techfest.org/2021/home/logo.svg" alt="TF LOGO" style={{marginTop: visible ? '0' : '-100px'}}/>
    </a>
    <div class="navgrad" id="logo" style={{marginTop: visible ? '0' : '-100px'}}>
            <img id="nav-img"  src="https://techfest.org/2021/home/Navbar/Logo.svg" alt="Techfest Logo"  />
        </div>
  
  </div>
  );
}


export default Logo;

// zrobić logo jako link do strony głównej
