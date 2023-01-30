import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeroImg from "../assets/images/hero-img-2.png";
import { BsPlayCircle } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <HeroContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="hero" className="hero d-flex align-items-center section-bg">
        <div className="container">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up">
                Enjoy Your Healthy
                <br />
                Delicious Food
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <div className="d-flex">
                <Link to="/type/main course" className="btn-book-a-table">
                  Explore Menu
                </Link>
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox btn-watch-video d-flex align-items-center"
                >
                  <BsPlayCircle />
                  <span>Watch Video</span>
                </a>
              </div>
            </div>
            <motion.div
              animate={{ x: 0 }}
              initial={{ x: 200 }}
              exit={{ x: 100 }}
              transition={{ duration: 0.8 }}
              className="col-lg-5 order-1 order-lg-2 text-center text-lg-start"
            >
              <img src={HeroImg} className="img-fluid" alt="hero" />
            </motion.div>
          </div>
        </div>
      </section>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled(motion.div)`
  /*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
  .hero {
    width: 100%;
    background-size: cover;
    position: relative;
    min-height: 60vh;
    padding: 160px 0 60px 0;
  }

  .hero h2 {
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 20px;

    font-family: "Amatic SC", cursive;
  }

  .hero h2 span {
    color: var(--color-primary);
  }

  .hero p {
    color: #b9b9c5;
    font-weight: 400;
    margin-bottom: 30px;
  }

  .hero .btn-book-a-table {
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 36px;
    border-radius: 50px;
    transition: 0.5s;
    color: #fff;
    background: #ce1212;
    box-shadow: 0 8px 28px rgba(206, 18, 18, 0.2);
    text-decoration: none;
  }

  .hero .btn-book-a-table:hover {
    background: rgba(206, 18, 18, 0.8);
    box-shadow: 0 8px 28px rgba(206, 18, 18, 0.45);
  }

  .hero .btn-watch-video {
    font-size: 16px;
    transition: 0.5s;
    margin-left: 25px;
    color: var(--font-secondary);
    font-weight: 600;
    text-decoration: none;
  }

  .hero .btn-watch-video svg {
    color: #ce1212;
    font-size: 32px;
    transition: 0.3s;
    line-height: 0;
    margin-right: 8px;
  }

  .hero .btn-watch-video:hover {
    color: #ce1212;
  }

  .hero .btn-watch-video:hover svg {
    color: rgba(206, 18, 18, 0.8);
  }

  @media (max-width: 640px) {
    .hero h2 {
      font-size: 36px;
    }

    .hero .btn-get-started,
    .hero .btn-watch-video {
      font-size: 14px;
    }
  }
`;
