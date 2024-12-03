import React from 'react';
import './style.css';

function App() {
  return (
    <div>
      <div className="video">
      <video src="https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/selto-teaser/2024/D-1920x1080.mp4"  height="25%" width="100%"controls autoplay loop muted ></video>
      </div>
       

      <nav>
       
       <div class="nevbar"> 
         <li type="none" class="nev">Cars</li>
         <li type="none" class="nev">Buy</li>
         <li type="none" class="nev">Owners</li>
         <li type="none" class="nev">VR Showroom</li> 
         
      <div class="logo">
       <li type="none" class="nev">KIA</li>
      </div>
   
         <div class="navbar2">
           <li type="none" class="nev">Kia Connect 2.0</li>
           <li type="none" class="nev">Discover Kia</li>
           <li type="none" class="nev">Find a Dealer</li>
         </div>
   
   
         
     </div>
   </nav>

      <div className="Disclaimer">
        <p>
          Disclaimer: The actions and stunts are performed under supervision and
          professionals in a controlled environment. Please do not imitate.
        </p>
      </div>

      <div className="buttonline">
        <div className="regi">
          <img
            src="https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/selto-teaser/Regis.png"
            height="450px"
            alt=""
          />
        </div>
        <div className="regi2">
          <img
            src="https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/selto-teaser/find.png"
            height="450px"
            alt=""
          />
        </div>
      </div>

      <div className="para1">
        <p>UNLOCK THE NEXT-LEVEL</p>
        <h1>Level up with the Badass.</h1>
        <p>
          Dominant, confident, and exhilarating. With a strong, chiseled look and
          a formidable stance, the new Kia Seltos showcases its Badass traits.
          The SUV car features highly powerful and fuel-efficient engine options,
          along with 32 safety features including 19 autonomous ADAS Level 2
          features, the reinvented Seltos compact SUV has everything it takes to
          be a Badass on the road.
        </p>
      </div>

      <div>
        <img
          src="https://www.kia.com/content/dam/kia2/in/en/buy/lead-generation/seltos/seltos-anniversary-dektop-image.png"
          height="25%"
          width="100%"
          alt=""
        />
        <div className="seltos5">
          <h1 style={{ fontSize: '45px' }}>
            Seltos 5-Year Anniversary Celebration.
          </h1>
          <p className="p1" style={{ fontSize: '35px' }}>
            Get 5-year warranty* and other exchange benefits* up to ₹60,000*
          </p>
        </div>
      </div>

      <div>
        <img
          src="https://www.kia.com/content/dam/kia2/in/en/images/360vr/seltos/tiw51mc5fhh392/exterior/mpb/08-d.png"
          height="25%"
          width="100%"
          alt=""
        />
        <div className="design">
          <p>DESIGN</p>
          <h1>Seltos</h1>
        </div>
        <div className="design2">
          <p>Exterior</p>
          <p>Interior</p>
        </div>
      </div>

      <div className="color">
        <p style={{ fontSize: '20px' }}>
          Colour: <b>Imperial Blue</b>
        </p>
      </div>

      <div className="color2">
        <img
          src="https://www.kia.com/content/dam/kia2/in/en/data/vehicle-info/exterior-color/mdbt0013/1.png"
          height="45px"
          width="45px"
          alt=""
        />
        {/* Add other color images similarly */}
      </div>

      <div className="interior">
        <p style={{ fontSize: '20px' }}>
          Interior: <b>All Black Interiors with White Inserts</b>
        </p>
        <span className="allback">
          <img
            src="https://www.kia.com/content/dam/kia2/in/en/data/vehicle-info/interior-color/mdbt0010/black-satin-cloth.jpg"
            height="45px"
            width="45px"
            style={{ borderRadius: '50%' }}
            alt=""
          />
        </span>
      </div>

      <div className="carseltos">
        <img
          src="https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/selto-teaser/adass/2_d.jpg"
          height="20%"
          width="100%"
          alt=""
        />
        <div className="item">
          <p>ADAS Level 2 with 19 Autonomous features</p>
          <p>Dual pane Panoramic sunroof</p>
          <p>Best-in class Power</p>
        </div>
      </div>

      <div className="video2">
      <video src="https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/selto-teaser/seltos-xline/explore_d.mp4"  height="25%" width="100%" controls autoplay loop muted ></video>

      </div>

      <div className="value">
        <p>Sequential LED Turn indicators</p>
        <p>R-18(46.20 cm) Crystal-Cut Glossy Black Alloy Wheels</p>
        <p>Star Map LED Connected Tail Lamps</p>
        <p>Dual-Pane Panoramic Sunroof</p>
      </div>

      <div>
        <img
          src="https://www.kia.com/content/dam/kia2/in/en/our-vehicles/showroom/seltos/KIA_Seltos_KV_1920.jpg"
          width="100%"
          alt=""
        />
      </div>

      <div className="para2">
        <p>GRAVITY</p>
        <h1>Take Off Like a Badass.</h1>
        <p>
          The Seltos Gravity Variant is here to redefine what it means to drive
          with purpose. Bold, powerful, and equipped with cutting-edge features,
          this edition is designed for those who rise above the rest.​
        </p>
      </div>
    </div>
  );
}

export default App;
