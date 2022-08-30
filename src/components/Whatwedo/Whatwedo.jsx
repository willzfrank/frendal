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
          <i class="uil uil-lightbulb-alt"></i>
          <p>Get a business idea</p>
        </div>
        <div className="line"></div>
        <div>
          <i class="uil uil-users-alt"></i>
          <p>Get support from friends</p>
        </div>
        <div className="line"></div>
        <div>
          <i class="uil uil-cog"></i>
          <p>Manage support from friends </p>
        </div>
        <div className="line"></div>
        <div>
          <i class="uil uil-rocket"></i>
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
  margin-top: 56px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 25px;
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background: #054cfc;
    }
  }
  .line {
    width: 68px;
    height: 5px;
    background: #054cfc;
    border-radius: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0em;
    text-align: center;
  }
`;
