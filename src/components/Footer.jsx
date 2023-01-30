import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon"></i>
              <div>
                <h4>Address</h4>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022 - US
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-telephone icon"></i>
              <div>
                <h4>Reservations</h4>
                <p>
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links d-flex">
              <i className="bi bi-clock icon"></i>
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat: 11AM</strong> - 23PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter">
                  <BsTwitter />
                </a>
                <a href="#" className="facebook">
                  <BsFacebook />
                </a>
                <a href="#" className="instagram">
                  <BsInstagram />
                </a>
                <a href="#" className="linkedin">
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Ramrachai Marma</span>
            </strong>
            . All Rights Reserved
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  .footer {
    font-size: 14px;
    background-color: #1f1f24;
    padding: 50px 0;
    color: rgba(255, 255, 255, 0.7);
  }

  .footer .icon {
    margin-right: 15px;
    font-size: 24px;
    line-height: 0;
  }

  .footer h4 {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    padding-bottom: 5px;
    color: #fff;
  }

  .footer .footer-links {
    margin-bottom: 30px;
  }

  .footer .footer-links ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer .footer-links ul li {
    padding: 10px 0;
    display: flex;
    align-items: center;
  }

  .footer .footer-links ul li:first-child {
    padding-top: 0;
  }

  .footer .footer-links ul a {
    color: rgba(255, 255, 255, 0.6);
    transition: 0.3s;
    display: inline-block;
    line-height: 1;
  }

  .footer .footer-links ul a:hover {
    color: #fff;
  }

  .footer .social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 16px;
    color: rgba(255, 255, 255, 0.7);
    margin-right: 10px;
    transition: 0.3s;
  }

  .footer .social-links a:hover {
    color: #fff;
    border-color: #fff;
  }

  .footer .copyright {
    text-align: center;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;
