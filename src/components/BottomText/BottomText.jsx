import React from 'react'
import "./BotttomText.scss"

function BottomText() {
    const newArr = Array.from({ length: 16 }, (el, index) => index + 1);

  return (
    <div className='bottom_text'>
         <div className="container">
        {/* <div className="neon"> Pleadis </div>
        <div className="flux"> 2k22 </div> */}
        <h1></h1>
        {/* <div className="box">
        {newArr.map((num) => (
          <span key={num} style={{ "--i": num }}>
            <i>fest</i> 2<i>K</i>22
          </span>
        ))} */}
      {/* </div> */}
      </div>
    </div>
  )
}

export default BottomText