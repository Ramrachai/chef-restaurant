import React from "react";
import styled from "styled-components";
import aboutPic1 from "../assets/images/terra-restaurant.webp";
import aboutPic2 from "../assets/images/about-2.jpg";
import { BsCheck2All } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutContainer>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>About Us</h2>
            <p>
              Learn More <span>About Us</span>
            </p>
          </div>

          <div className="row gy-4">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="col-lg-7 position-relative about-img"
              style={{
                backgroundImage: `url(${aboutPic1})`,
                backgroundRepeat: "no-repeat",
              }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="call-us position-absolute">
                <h4>Book a Table</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="col-lg-5 d-flex align-items-end"
            >
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <BsCheck2All /> Ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </li>
                  <li>
                    <BsCheck2All /> Duis aute irure dolor in reprehenderit in
                    voluptate velit.
                  </li>
                  <li>
                    <BsCheck2All /> Ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate trideta storacalaperda mastiro dolore eu fugiat
                    nulla pariatur.
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident
                </p>

                <div className="position-relative mt-4">
                  <img src={aboutPic2} className="img-fluid" alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                    className="glightbox play-btn"
                  >
                    a
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  section {
    overflow: hidden;
    padding: 80px 0;
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

  overflow: hidden;
  .about .about-img {
    min-height: 500px;
    position: relative;
  }

  .about h3 {
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 30px;
    font-family: var(--font-secondary);
  }

  .about .call-us {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    border: 4px solid #dcdcdc;
    background-color: #1719235e;
    backdrop-filter: blur(5px);
    box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.08);
    padding: 20px;
    text-align: center;
  }

  .about .call-us h4 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .about .call-us p {
    font-size: 28px;
    font-weight: 700;
    color: #ffc107;
  }

  .about .content ul {
    list-style: none;
    padding: 0;
  }

  .about .content ul li {
    padding: 0 0 8px 26px;
    position: relative;
  }

  .about .content ul svg {
    position: absolute;
    font-size: 20px;
    left: 0;
    top: -3px;
    color: #ce1212;
  }

  .about .content p:last-child {
    margin-bottom: 0;
  }

  .about .play-btn {
    width: 94px;
    height: 94px;
    background: radial-gradient(#ce1212 50%, rgba(206, 18, 18, 0.4) 52%);
    border-radius: 50%;
    display: block;
    position: absolute;
    left: calc(50% - 47px);
    top: calc(50% - 47px);
    overflow: hidden;
  }

  .about .play-btn:before {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-animation: pulsate-btn 2s;
    animation: pulsate-btn 2s;
    -webkit-animation-direction: forwards;
    animation-direction: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: steps;
    animation-timing-function: steps;
    opacity: 1;
    border-radius: 50%;
    border: 5px solid rgba(206, 18, 18, 0.7);
    top: -15%;
    left: -15%;
    background: rgba(198, 16, 0, 0);
  }

  .about .play-btn:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-40%) translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #fff;
    z-index: 100;
    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .position-relative {
    position: relative;
  }
  .about .play-btn:hover:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-40%) translateY(-50%);
    width: 0;
    height: 0;
    border: none;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #fff;
    z-index: 200;
    -webkit-animation: none;
    animation: none;
    border-radius: 0;
  }

  .about .play-btn:hover:after {
    border-left: 15px solid #ce1212;
    transform: scale(20);
  }

  @-webkit-keyframes pulsate-btn {
    0% {
      transform: scale(0.6, 0.6);
      opacity: 1;
    }

    100% {
      transform: scale(1, 1);
      opacity: 0;
    }
  }

  @keyframes pulsate-btn {
    0% {
      transform: scale(0.6, 0.6);
      opacity: 1;
    }

    100% {
      transform: scale(1, 1);
      opacity: 0;
    }
  }
`;
