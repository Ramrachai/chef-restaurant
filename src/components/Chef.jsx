import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import styled from "styled-components";
import { motion } from "framer-motion";

import chef1 from "../assets/images/chefs/chefs-1.jpg";
import chef2 from "../assets/images/chefs/chefs-2.jpg";
import chef3 from "../assets/images/chefs/chefs-3.jpg";

const Chef = () => {
  return (
    <ChefContainer>
      <section id="chefs" className="chefs section-bg">
        <div className="container">
          <div className="section-header">
            <h2>Chefs</h2>
            <p>
              Our <span>Proffesional</span> Chefs
            </p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="chef-member"
              >
                <div className="member-img">
                  <img src={chef1} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <BsTwitter />
                    </a>
                    <a href="#">
                      <BsFacebook />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                      <BsInstagram />
                    </a>
                    <a href="#">
                      <BsLinkedin />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Master Chef</span>
                  <p>
                    Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                    tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                    corporis et voluptate.
                  </p>
                </div>
              </motion.div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="chef-member"
              >
                <div className="member-img">
                  <img src={chef2} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <BsTwitter />
                    </a>
                    <a href="#">
                      <BsFacebook />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                      <BsInstagram />
                    </a>
                    <a href="#">
                      <BsLinkedin />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Patissier</span>
                  <p>
                    Quo esse repellendus quia id. Est eum et accusantium
                    pariatur fugit nihil minima suscipit corporis. Voluptate sed
                    quas reiciendis animi neque sapiente.
                  </p>
                </div>
              </motion.div>
            </div>

            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="chef-member"
              >
                <div className="member-img">
                  <img src={chef3} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="#">
                      <BsTwitter />
                    </a>
                    <a href="#">
                      <BsFacebook />
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                      <BsInstagram />
                    </a>
                    <a href="#">
                      <BsLinkedin />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>Cook</span>
                  <p>
                    Vero omnis enim consequatur. Voluptas consectetur unde qui
                    molestiae deserunt. Voluptates enim aut architecto porro
                    aspernatur molestiae modi.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </ChefContainer>
  );
};

export default Chef;

const ChefContainer = styled.div`
  .section-header {
    margin: 2rem 0;
    text-align: center;
    p {
      font-size: 2.2rem;
      font-family: "Amatic SC", cursive;
      span {
        color: #fd7474;
      }
    }
  }
  .chefs {
    margin: 6rem 0;
    overflow: hidden;
    @media (max-width: 768px) {
      padding: 0 5%;
    }
  }
  .chefs .chef-member {
    overflow: hidden;
    text-align: center;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0px 0 30px rgba(55, 55, 63, 0.08);
    transition: 0.3s;
  }

  .chefs .chef-member .member-img {
    position: relative;
    overflow: hidden;
  }

  .chefs .chef-member .member-img:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: url(../img/team-shape.svg) no-repeat center bottom;
    background-size: contain;
    z-index: 1;
  }

  .chefs .chef-member .social {
    position: absolute;
    right: -100%;
    top: 30px;
    opacity: 0;
    border-radius: 4px;
    transition: 0.5s;
    background: rgba(255, 255, 255, 0.3);
    z-index: 2;
  }

  .chefs .chef-member .social a {
    transition: color 0.3s;
    color: rgba(55, 55, 63, 0.4);
    margin: 15px 12px;
    display: block;
    line-height: 0;
    text-align: center;
  }

  .chefs .chef-member .social a:hover {
    color: rgba(55, 55, 63, 0.9);
  }

  .chefs .chef-member .social i {
    font-size: 18px;
  }

  .chefs .chef-member .member-info {
    padding: 10px 15px 20px 15px;
  }

  .chefs .chef-member .member-info h4 {
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
    color: #353535;
  }

  .chefs .chef-member .member-info span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba(33, 37, 41, 0.4);
  }

  .chefs .chef-member .member-info p {
    font-style: italic;
    font-size: 14px;
    padding-top: 15px;
    line-height: 26px;
    color: rgba(33, 37, 41, 0.7);
  }

  .chefs .chef-member:hover {
    transform: scale(1.08);
    box-shadow: 0px 0 30px rgba(55, 55, 63, 0.15);
  }

  .chefs .chef-member:hover .social {
    right: 8px;
    opacity: 1;
  }
`;
