import React from "react";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='directory-menu'>
        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>HATS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>SNEAKER</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>JEANS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>WOMEN</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>

        <div className='menu-item'>
          <div className='content'>
            <h1 className='title'>MEN</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
