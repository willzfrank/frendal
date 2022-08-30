import React from 'react';
import logo from '../../assets/image 3.png';
import profile from '../../assets/avatar2.png';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={logo} alt="" />
      <div>
        <p>Register</p>
        <img src={profile} alt="" />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  border: 2px solid red;
  display: flex;
`;
