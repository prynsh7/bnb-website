import React from 'react'
import "./Event.scss";

function Event() {
  return (
    <div className='event_page'>
        <div className="banner">
            <div className="banner_img">
                <img src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
            </div>
        </div>

        <div className="event_details">
            <h2>New Releases</h2>

            <div className="card_container">
                <div className="card">
                    <img src="http://techfest.org/2021/Technoholix/2.jpeg" alt="" />

                    <div className='info'>
                        <p>this is info</p>
                    </div>
                </div>

                <div className="card">
                    <img src="http://techfest.org/2021/Technoholix/2.jpeg" alt="" />

                    <div className='info'>
                        <p>this is info</p>
                    </div>
                </div>

                <div className="card">
                    <img src="http://techfest.org/2021/Technoholix/2.jpeg" alt="" />

                    <div className='info'>
                        <p>this is info</p>
                    </div>
                </div>

                <div className="card">
                    <img src="http://techfest.org/2021/Technoholix/2.jpeg" alt="" />

                    <div className='info'>
                        <p>this is info</p>
                    </div>
                </div>

                <div className="card">
                    <img src="http://techfest.org/2021/Technoholix/2.jpeg" alt="" />

                    <div className='info'>
                        <p>this is info</p>
                    </div>
                </div>

                <div className="card">
                    <img src="http://techfest.org/2021/Technoholix/2.jpeg" alt="" />

                    <div className='info'>
                        <p>this is info</p>
                    </div>
                </div>

                
            </div>
        </div>


    </div>
  )
}

export default Event