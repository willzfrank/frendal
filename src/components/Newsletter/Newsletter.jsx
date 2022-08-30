import styled from 'styled-components';

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <p>
        Bring that innovative idea to life <br />
        with support from friends
      </p>
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter your email"
        className="newsletter--email"
      />
      <input type="button" value="Launch" className="newsletter--btn" />
    </NewsletterContainer>
  );
};

export default Newsletter;

const NewsletterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #054cfc;

  p {
    font-size: 40px;
    font-weight: 700;
    line-height: 54px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: 66px;
    color: white;
  }

  .newsletter--btn {
    border-radius: 5px;
    width: 50%;
    border: none;
    background: #ff5c00;
    box-shadow: 0px 6px 13px 0px #00000040;
    color: white;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 117px;
    cursor: pointer;
    padding: 15px 249px 15px 249px;
  }

  .newsletter--email {
    width: 50%;
    border: 2.05px solid #00000066;
    border-radius: 6.149999618530273px;
    padding: 21px 31px 21px 31px;
    outline: none;
    margin-bottom: 23px;
    font-size: 18px;
    font-weight: 600;

    ::placeholder {
      font-size: 15px;
      font-weight: 400;
    }
  }
`;
