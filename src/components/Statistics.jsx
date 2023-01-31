import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import statBg from "../assets/images/stats-bg.jpg";

const Statistics = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  return (
    <StatContainer bg={statBg}>
      <section ref={ref} id="stats-counter" className="stats-counter">
        <h3 className="title text-center">Our achievment in numbers</h3>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                {inView ? (
                  <CountUp end={320} delay={0.5} duration={1.75} />
                ) : (
                  <CountUp end={0} />
                )}
                <p>Menu Items</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                {inView ? (
                  <CountUp end={5290} delay={0.5} duration={1.75} />
                ) : (
                  <CountUp end={0} />
                )}
                <p>Satisfied Customers</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                {inView ? (
                  <CountUp end={43800} delay={0.5} duration={1.75} />
                ) : (
                  <CountUp end={0} />
                )}
                <p>Hours Of Service</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="stats-item text-center w-100 h-100">
                {inView ? (
                  <CountUp end={65} delay={0.5} duration={1.75} />
                ) : (
                  <CountUp end={0} />
                )}
                <p>Staffs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StatContainer>
  );
};

export default Statistics;

const StatContainer = styled.div`
  .title {
    color: white;
    text-transform: uppercase;
    font-size: 2rem;
    font-family: "Amatic SC", cursive;
    letter-spacing: 2px;
  }
  .stats-counter {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.bg}) center center;
    background-size: cover;
    padding: 100px 0;
  }

  @media (min-width: 1365px) {
    .stats-counter {
      background-attachment: fixed;
    }
  }

  .stats-counter .stats-item {
    padding: 30px;
    width: 100%;
  }

  .stats-counter .stats-item span {
    font-size: 48px;
    display: block;
    color: #fff;
    font-weight: 700;
  }

  .stats-counter .stats-item p {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.6);
  }
`;
