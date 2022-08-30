import styled from 'styled-components';
import footer from '../../assets/image 1.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <div className="image--container">
          <img src={footer} alt="" />
          <p>
            We are a platform that helps
            <br /> you receive support from friends at
            <br /> the launch of your business
          </p>
          <div>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <span className="ai-twitter"></span>
            <span className="ai-youtube"></span>
            <i className="el el-instagram"></i>
            <span className="ai-linkedin"></span>
          </div>
        </div>
        <div className="newsletter--container">
          <p>
            Discover new and innovative
            <br /> ideas in the frendal newsletter
          </p>
          <input
            type="email"
            name=""
            id=""
            placeholder="Your email address"
            className="newsletter--email"
          />
          <input type="button" value="Sign me up" className="signup--btn" />
        </div>
      </FooterBox>

      <hr />
      <FooterBottom>
        <div>
          <p>© 2022 Friendal, Inc. All Rights Reserved</p>
        </div>
        <div className="fotterBottom--right">
          <div>
            <p>Terms of Use</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
        </div>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: #054cfc;
`;

const FooterBox = styled.div`
  background: #054cfc;
  display: flex;
  padding: 61px 128px;
  justify-content: space-between;

  .newsletter--container {
    p {
      font-size: 20px;
      color: white;
      line-height: 33px;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom: 11px;
    }

    .newsletter--email {
      width: 100%;
      border-radius: 4.25px;
      padding: 14px 21px 14px 21px;
      outline: none;
      border: none;
      margin-bottom: 14px;

      ::placeholder {
        font-size: 17px;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: left;
      }
    }

    .signup--btn {
      width: 100%;
      border: none;
      background: #ff5c00;
      font-size: 20px;
      color: white;
      cursor: pointer;
      text-align: center;
      border-radius: 5px;
      padding: 10px 20px 10px 20px;
    }
  }

  .image--container {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    text-align: center;
    flex-direction: column;

    p {
      color: white;
      font-size: 20px;
      line-height: 33px;
      letter-spacing: 0em;
      text-align: center;
    }

    img {
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 35px 128px 16px 128px;
  font-size: 16px;
  color: white;

  .fotterBottom--right {
    display: flex;
    gap: 63px;
  }
`;
