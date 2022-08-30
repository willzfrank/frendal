import React from 'react';
import logo from '../../assets/image 3.png';
import profile from '../../assets/avatar2.png';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <NavbarContainer>
      <img src={logo} alt="" />
      <ProfileContainer>
        <p>Register</p>
        <img src={profile} alt="" />
      </ProfileContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  /* border: 2px solid red; */
  display: flex;
  justify-content: space-between;

  img {
    height: 132px;
    width: 305px;
    border-radius: 0px;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 73px;
  justify-content: center;

  p {
    font-size: 24px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
  }

  img {
    height: 75px;
    width: 75px;
    left: 1311px;
    top: 21px;
    border-radius: 50%;
  }
`;
