import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <div>
        <h1>Business grows when friends and family help out </h1>
        <p>Easily invite friends to help support your project with Frendal</p>
        <div>
          <input type="button" value="Launch project" />
          <input type="button" value="Learn more" />
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>

      <div>
        <div>
          5+
          <br />
          projects launched
        </div>
        <div>
          5000 <br /> supported gathered
        </div>
        <div>
          17925 <br /> supports pledges
        </div>
      </div>
      <p>Trusted by 5000+ customers around the world</p>
    </div>
  );
};

export default Header;
