import styled from 'styled-components';

const Faq = () => {
  return (
    <FAQContainer>
      <h2>Frequently asked questions</h2>

      <FAQBox>
        <div>
          <p>Why do I need a website for my business ?</p>
          <i className="icon-3deffects"></i>
        </div>
        <div>
          <p>Why do I need a website for my business ?</p>
          <i className="icon-3deffects"></i>
        </div>
        <div>
          <p>Why do I need a website for my business ?</p>
          <i className="icon-3deffects"></i>
        </div>
        <div>
          <p>Why do I need a website for my business ?</p>
          <i className="icon-3deffects"></i>
        </div>
      </FAQBox>
    </FAQContainer>
  );
};

export default Faq;

const FAQContainer = styled.div`
  margin: 87px 160px 100px 160px;

  h2 {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
  }
`;

const FAQBox = styled.div`
  div {
    border: 1.05px solid #00000066;
    width: 100%;
    padding: 15px 20px;
    height: 83px;
    display: flex;
    border-radius: 4px;
    align-items: center;
    margin-bottom: 10px;

    p {
      font-size: 18px;
      font-weight: 600;
      line-height: 49px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;
