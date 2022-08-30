import styled from 'styled-components';

const Stages = () => {
  return (
    <StagesContainer>
      <h2>How to use Frendal</h2>
      <div className="stages--box">
        <div className="stages--box--content">
          <span>1</span>
          <p>Create an account</p>
        </div>
        <div className="stages--box--content">
          <span>2</span>
          <p>Generate Lead Page</p>
        </div>
        <div className="stages--box--content">
          <span>3</span>
          <p>Share your URL to friends</p>
        </div>
        <div className="stages--box--content">
          <span>4</span>
          <p>Monitor feedback from friends</p>
        </div>
        <div className="stages--box--content">
          <span>5</span>
          <p>Launch</p>
        </div>
      </div>
    </StagesContainer>
  );
};

export default Stages;

const StagesContainer = styled.section`
  margin-bottom: 100px;

  h2 {
    font-size: 50px;
    font-weight: 700;
    line-height: 76px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 59px;
  }

  .stages--box {
    display: flex;
    gap: 28px;

    .stages--box--content {
      padding: 15px;
      height: 350px;
      width: 450px;
      display: flex;
      flex-direction: column;
      margin-bottom: 33px;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      box-shadow: 0px 4px 21px 0px #83838340;

      span {
        font-size: 25px;
        margin-bottom: 10px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: #054cfc;
        font-weight: 600;
        line-height: 54px;
        letter-spacing: 0em;
        text-align: center;
        color: white;
      }

      p {
        font-size: 20px;
        font-weight: 600;

        letter-spacing: 0em;
        text-align: center;
      }
    }
  }
`;
