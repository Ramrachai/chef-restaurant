import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsMap, BsShare, BsTelephoneForward } from "react-icons/bs";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactContainer>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Contact</h2>
            <p>
              Need Help? <span>Contact Us</span>
            </p>
          </div>

          <div className="mb-3">
            <iframe
              title="map"
              style={{ border: 0, width: "100%", height: "350px" }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>

          <div className="row gy-4">
            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <div className="icon-box">
                  <BsMap />
                </div>
                <div>
                  <h3>Our Address</h3>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <div className="icon-box">
                  <AiOutlineMail />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>contact@example.com</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <div className="icon-box">
                  <BsTelephoneForward />
                </div>

                <div>
                  <h3>Call Us</h3>
                  <p>+1 5589 55488 55</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="info-item d-flex align-items-center">
                <div className="icon-box">
                  <BsShare />
                </div>

                <div>
                  <h3>Opening Hours</h3>
                  <div>
                    <strong>Mon-Sat:</strong> 11AM - 23PM;
                    <strong>Sunday:</strong> Closed
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="php-email-form p-3 p-md-4">
            <div className="row">
              <div className="col-xl-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-xl-6 form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your message has been sent. Thank you!
              </div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  $default: #212529;
  #fd7474: #ce1212;
  $secondary: #37373f;
  $family: "Amatic SC", cursive;

  section {
    overflow: hidden;
    padding: 80px 0;
  }

  .section-bg {
    background-color: #eee;
  }

  .section-header {
    text-align: center;
    padding-bottom: 30px;
  }

  .section-header h2 {
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: #7f7f90;
    text-transform: uppercase;
    /* font-family: $family;  */
  }

  .section-header p {
    margin: 0;
    font-size: 48px;
    font-weight: 400;
    font-family: "Amatic SC", cursive;
  }

  .section-header p span {
    color: #fd7474;
  }

  .contact .info-item {
    background: #f4f4f4;
    padding: 30px;
    height: 100%;
    color: #3d3d3d;
  }

  .contact .info-item .icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    font-size: 24px;
    line-height: 0;
    color: #fff;
    background: #fd7474;
    border-radius: 50%;
    margin-right: 15px;
  }

  .contact .info-item h3 {
    font-size: 20px;
    color: #6c757d;
    font-weight: 700;
    margin: 0 0 5px 0;
  }

  .contact .info-item p {
    padding: 0;
    margin: 0;
    line-height: 24px;
    font-size: 14px;
    color: #3d3d3d;
  }

  .contact .info-item .social-links a {
    font-size: 24px;
    display: inline-block;
    color: rgba(55, 55, 63, 0.7);
    line-height: 1;
    margin: 4px 6px 0 0;
    transition: 0.3s;
  }

  .contact .info-item .social-links a:hover {
    color: #fd7474;
  }

  .contact .php-email-form {
    width: 100%;
    margin-top: 30px;
    background: #fff;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.08);
  }

  .contact .php-email-form .form-group {
    padding-bottom: 20px;
  }

  .contact .php-email-form .error-message {
    display: none;
    color: #fff;
    background: #df1529;
    text-align: left;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .error-message br + br {
    margin-top: 25px;
  }

  .contact .php-email-form .sent-message {
    display: none;
    color: #fff;
    background: #059652;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .contact .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }

  .contact .php-email-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #059652;
    border-top-color: #fff;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
  }

  .contact .php-email-form input,
  .contact .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }

  .contact .php-email-form input:focus,
  .contact .php-email-form textarea:focus {
    border-color: #fd7474;
  }

  .contact .php-email-form input {
    height: 48px;
  }

  .contact .php-email-form textarea {
    padding: 10px 12px;
  }

  .contact .php-email-form button[type="submit"] {
    background: #fd7474;
    border: 0;
    padding: 12px 40px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
  }

  .contact .php-email-form button[type="submit"]:hover {
    background: #ec2727;
  }

  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
