import React from 'react';
import footer from '../../assets/image 1.png';

const Footer = () => {
  return (
    <div>
      <div>
        <img src={footer} alt="" />
        <p>
          We are a platform that helps you receive support from friends at the
          launch of your business
        </p>
        <div>
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <span className="ai-twitter"></span>
          <span className="ai-youtube"></span>
          <i className="el el-instagram"></i>
          <span className="ai-linkedin"></span>
        </div>
      </div>
      <div>
        <p>Discover new and innovative ideas in the frendal newsletter</p>
        <input type="email" name="" id="" />
        <input type="button" value="Sign me up" />
      </div>
      <hr />
      <div>
        <div>
          <p>© 2022 Friendal, Inc. All Rights Reserved</p>
        </div>
        <div>
          <div>
            <p>Terms of Use</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
