import React, {useState, useEffect} from 'react'
import './Footer.scss'

function Footer() {

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
    <footer>
        <div id='left-f' style={{left: visible ? '0' : '-400px'}}>
        <div className="content" style={{left: visible ? '0' : '-400px'}}>
            <p>CONTACT US</p>
            <p>LEGALS</p>
            
        </div>
        <img style={{width: '100%'}} src="https://techfest.org/2021/home/Navbar/BL.svg" alt="" />
        </div>

        <div id='right-f' style={{right: visible ? '0' : '-400px'}}>
        
        <div className="content" style={{right: visible ? '0' : '-400px'}}>
        <p>
        <i class='bx bxl-facebook'></i>
        </p>
        <p>
        <i class='bx bxl-instagram' ></i>
        </p>

        <p>
        <i class='bx bxl-twitter' ></i>
        </p>

        </div>

        <img style={{width: '100%'}} src="https://techfest.org/2021/home/Navbar/BR.svg" alt="" />
        </div>
    </footer>
  )
}

export default Footer