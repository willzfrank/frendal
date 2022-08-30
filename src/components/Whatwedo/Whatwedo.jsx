import styled from 'styled-components';

const Whatwedo = () => {
  return (
    <WhatwedoContainer>
      <h2>What we do </h2>
      <p className="main--text">
        Our goal is to help entreperneurs bring innovative ideas to life with
        the help of a community of
        <br /> friends and necessary tools
      </p>
      <IconContainer>
        <div>
          <i className="icon-3deffects"></i>
          <p>Get a business idea</p>
        </div>
        <div className="line"></div>
        <div>
          <i className="icon-3deffects"></i>
          <p>Get support from friends</p>
        </div>
        <div className="line"></div>
        <div>
          <i className="icon-3deffects"></i>
          <p>Manage support from friends </p>
        </div>
        <div className="line"></div>
        <div>
          <i className="icon-3deffects"></i>
          <p>Launch</p>
        </div>
      </IconContainer>
    </WhatwedoContainer>
  );
};

export default Whatwedo;

const WhatwedoContainer = styled.section`
  margin-top: 55px;
  margin-bottom: 80px;

  h2 {
    font-size: 50px;
    font-weight: 700;
    line-height: 76px;
    text-align: center;
    margin-bottom: 25px;
  }

  .main--text {
    font-size: 20px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 25px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 23px;
  justify-content: center;
  align-items: center;

  .line {
    width: 68px;
    height: 5px;
    background: #054cfc;
    border-radius: 18px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
