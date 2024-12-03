import { useState } from 'react';
import './style.css';

function User() {
  return (
    <>
      <nav>
        <div className="nevbar">
          <li type="none" className="nev">Cars</li>
          <li type="none" className="nev">Buy</li>
          <li type="none" className="nev">Owners</li>
          <li type="none" className="nev">VR Showroom</li>

          <div className="logo">
            <li type="none" className="nev">KIA</li>
          </div>

          <div className="navbar2">
            <li type="none" className="nev">Kia Connect 2.0</li>
            <li type="none" className="nev">Discover Kia</li>
            <li type="none" className="nev">Find a Dealer</li>
          </div>
        </div>
      </nav>

      <div className="Disclaimer">
        <p>Disclaimer: The actions and stunts are performed under supervision and professionals in a controlled environment. Please do not imitate.</p>
      </div>

      <div className="buttonline">
        <div className="regi"></div>
        <div className="regi2"></div>
      </div>

      <div className="para1">
        <p>UNLOCK THE NEXT-LEVEL</p>
        <h1>Level up with the Badass.</h1>
        <p>Dominant, confident, and exhilarating. With a strong, chiseled look and a formidable stance, the new Kia
          Seltos showcases its Badass traits. The SUV car features highly powerful and fuel-efficient engine options,
          along with 32 safety features including 19 autonomous ADAS Level 2 features, the reinvented Seltos
          compact SUV has everything it takes to be a Badass on the road.</p>
      </div>

      <div className="seltos5">
        <h1 style={{ fontSize: '45px' }}>Seltos 5-Year Anniversary Celebration.</h1>
        <p className="p1" style={{ fontSize: '35px' }}>Get 5-year warranty* and other exchange benefits* up to ₹60,000*</p>
      </div>

      <div className="design">
        <p>DESIGN</p>
        <h1>Seltos</h1>
      </div>
      <div className="design2">
        <p>Exterior <pre>interior</pre></p>
      </div>

      <div className="color">
        <p style={{ fontSize: '20px' }}>Colour: <b>Imperial Blue</b></p>
      </div>

      <div className="color2"></div>

      <div className="interior">
        <p style={{ fontSize: '20px' }}>Interior: <b>All Black Interiors with White Inserts</b></p>
        <span className="allback"></span>
      </div>

      <div className="carseltos">
        <div className="item">
          <p>ADAS Level 2 with <br />19 Autonomous features</p>
          <p>Dual pane <br />Panoramic sunroof</p>
          <p>Best-in <br /> class Power</p>
        </div>
      </div>

      <div>
        <div className="video">
          <video src="explore_d.mp4" height="25%" width="100%" controls autoplay loop muted></video>
        </div>
        <div className="value">
          <p>Sequential LED Turn <br /> indicators</p>
          <p>R-18(46.20 cm) Crystal-Cut <br /> Glossy Black Alloy Wheels</p>
          <p>Star Map LED Connected <br /> Tail Lamps</p>
          <p>Dual-Pane Panoramic <br />Sunroof</p>
          <p>Dual-Zone Fully Automatic <br />Air Conditioner</p>
          <p>26.03cm (10.25")HD <br />Touchscreen AVNT + full <br /> Digital Cluster with 26.04 cm(10.25") color LCD MID </p>
        </div>
      </div>

      <div className="para2">
        <p>GRAVITY</p>
        <h1>Take Off Like a Badass.</h1>
        <p>The Seltos Gravity Variant is here to redefine what it means to drive with purpose. Bold, powerful, and equipped with cutting-edge
          features, this edition is designed for those who rise above the rest.​</p>
      </div>
    </>
  );
}

export default User;

