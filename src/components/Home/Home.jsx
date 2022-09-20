import React from 'react'
import './Home.scss'
import ab from './Mart1.mp4'
import BottomText from '../BottomText/BottomText';

function Home() {
    return (<>
        {/* https://techfest.org/2021/home/Final.mp4 */}
        
        <video muted loop autoPlay id="myVideo" style={{ height: '100%', minWidth: '100%', maxWidth: '100%' }}>
            <source style={{ alignContent: 'center' }} src={ab} type="video/mp4" />
        </video>
        <BottomText />
        <div className="gradient1"></div>
        <div className="gradient2"></div>
        <div className="home">
            
            <div className='section_cards'>

                <h2>OUR SPONSERS</h2>

                <div className="sec_1">
                <div className="card-cont">
                <div className="card">
                    <img src="https://techfest.org/2021/competitons/producthack.jpg" alt="" />
                    <div className="layer">
                        <h3>Lorem Ipsem</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum unde amet sunt, quibusdam debitis iure?</p>
                    </div>
                </div>

                <svg id="rect" width={305} height={405}>
                    <rect width={300} height={100} style={{ fill: 'transparent' }} />
                </svg>
                </div>
                <div className="card-cont">
                <div className="card">
                    <div className="layer">
                        <h3>Lorem Ipsem</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum unde amet sunt, quibusdam debitis iure?</p>
                    </div>
                </div>

                <svg id="rect" width={305} height={405}>
                    <rect width={300} height={100} style={{ fill: 'transparent' }} />
                </svg>
                </div>
                <div className="card-cont">
                <div className="card">
                    <div className="layer">
                        <h3>Lorem Ipsem</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum unde amet sunt, quibusdam debitis iure?</p>
                    </div>
                </div>

                <svg id="rect" width={305} height={405}>
                    <rect width={300} height={100} style={{ fill: 'transparent' }} />
                </svg>
                </div>
                <div className="card-cont">
                <div className="card">

                    <div className="layer">
                        <h3>Lorem Ipsem</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum unde amet sunt, quibusdam debitis iure?</p>
                    </div>
                </div>

                <svg id="rect" width={305} height={405}>
                    <rect width={300} height={100} style={{ fill: 'transparent' }} />
                </svg>
                </div>
            </div>


            </div>


        </div>

    </>);
}

export default Home;