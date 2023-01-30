import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiChevronsRight } from "react-icons/bi";
import { SiEclipsemosquitto } from "react-icons/si";
import { BsGem, BsInboxes } from "react-icons/bs";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <WhyUsContainer>
      <section id="why-us" className="why-us section-bg">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="why-box"
              >
                <h3>Why Choose Us?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <div className="text-center">
                  <Link to="#" className="more-btn">
                    Learn More <BiChevronsRight />{" "}
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-8 d-flex align-items-center">
              <div className="row gy-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="col-xl-4"
                >
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <SiEclipsemosquitto />
                    <h4>Corporis voluptates officia eiusmod</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="col-xl-4"
                >
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <BsGem />
                    <h4>Ullamco laboris ladore pan</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="col-xl-4"
                >
                  <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                    <BsInboxes />
                    <h4>Labore consequatur incidid dolore</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </WhyUsContainer>
  );
};

export default WhyUs;

const WhyUsContainer = styled.div`
  width: 100wv;
  background-color: #dee2e6;
  padding: 4rem 0;

  .why-us .why-box {
    padding: 30px;
    background: #ce1212;
    color: #fff;
  }

  .why-us .why-box h3 {
    font-weight: 700;
    font-size: 34px;
    margin-bottom: 30px;
  }

  .why-us .why-box p {
    margin-bottom: 30px;
  }

  .why-us .why-box .more-btn {
    display: inline-block;
    background: rgba(255, 255, 255, 0.3);
    padding: 6px 30px 8px 30px;
    color: #fff;
    border-radius: 50px;
    transition: all ease-in-out 0.4s;
    text-decoration: none;
  }

  .why-us .why-box .more-btn svg {
    font-size: 14px;
  }

  .why-us .why-box .more-btn:hover {
    color: #ce1212;
    background: #fff;
  }

  .why-us .icon-box {
    text-align: center;
    background: #fff;
    padding: 40px 30px;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(55, 55, 63, 0.1);
    transition: 0.3s;
  }

  .why-us .icon-box svg {
    color: #ce1212;
    margin-bottom: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
  }

  .why-us .icon-box h4 {
    font-size: 20px;
    font-weight: 400;
    margin: 0 0 30px 0;
    color: #1b1b1b;
    /* font-family: "sans-serif"; */
  }

  .why-us .icon-box p {
    font-size: 15px;
    color: #6c757d;
  }

  @media (min-width: 1200px) {
    .why-us .icon-box:hover {
      transform: scale(1.1);
    }
  }
`;
