import React from 'react';
import styled from 'styled-components';
import image from '../../assets/image 6.png';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <HeaderContent>
          <h1>Business grows when friends and family help out </h1>
          <p>Easily invite friends to help support your project with Frendal</p>
          <div className="button--container">
            <input type="button" value="Launch project" className="launchbtn" />
            <input type="button" value="Learn more" className="learnmorebtn" />
          </div>
        </HeaderContent>
        <div>
          <div>
            <img src={image} alt="" />
          </div>
        </div>
      </HeaderBox>
      <ProjectsContainer>
        <div className="projects--box">
          <div className="project--content">
            <span>5+</span>
            <br />
            <p> projects launched</p>
          </div>
          <div className="project--content">
            <span>5000</span>
            <br />
            <p>supported gathered</p>
          </div>
          <div className="project--content">
            <span>17925</span>
            <br />
            <p>supports pledges</p>
          </div>
        </div>
        <p className="trust--text">
          Trusted by 5000+ customers around the world
        </p>
      </ProjectsContainer>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  margin-top: 114px;
`;
const HeaderContent = styled.div`
  width: 660px;
  transition: 0.3s;
  padding: 0px 6px;

  border: 2px solid white;
  h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 79px;
    letter-spacing: 0.03em;
    text-align: left;
    margin-bottom: 32px;
  }

  p {
    font-size: 26px;
    font-weight: 600;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 81px;
  }

  .button--container {
    display: flex;
    gap: 10px;

    input {
      padding: 10px 20px;
      width: 250px;
      height: 58px;
      border-radius: 5px;
      cursor: pointer;
    }

    .launchbtn {
      border: none;
      background: #ff5c00;
      color: white;
      font-size: 20px;
      font-weight: 700;
      text-align: center;
    }

    .learnmorebtn {
      border: 1px solid #054cfc;
      color: #054cfc;
      font-weight: 700;
      font-size: 20px;
    }
  }
`;

const HeaderBox = styled.header`
  display: flex;
  justify-content: space-between;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;

  .trust--text {
    font-size: 20px;
    font-weight: 600;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    color: #9c9c9c;
  }
  .projects--box {
    border: 1px solid #aaaaaa;
    box-shadow: 0px 4px 12px 8px #9292924d;
    margin: 185px 235px 32px 235px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 176px;
    border-radius: 0px;

    .project--content {
      span {
        font-size: 30px;
        font-weight: 600;
        line-height: 65px;
        letter-spacing: 0em;
        text-align: center;
      }
      p {
        font-size: 20px;
        font-weight: 400;
        line-height: 44px;
        letter-spacing: 0em;
        text-align: center;
      }
    }
  }
`;
