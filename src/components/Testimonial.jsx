import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import Testimonial1 from "../assets/images/testimonials/testimonials-1.jpg";
import Testimonial2 from "../assets/images/testimonials/testimonials-2.jpg";
import Testimonial3 from "../assets/images/testimonials/testimonials-3.jpg";
import Testimonial4 from "../assets/images/testimonials/testimonials-4.jpg";
import { AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const data = [
  {
    image: Testimonial1,
    name: "Sara Wilsson",
    designation: "Designer",
    comment:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. ccusantiu mquam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    image: Testimonial2,
    name: "Saul Goodman",
    designation: "Ceo &amp; Founder",
    comment:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. ccusantiu mquam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    image: Testimonial3,
    name: "Jena Karlis",
    designation: "Store Owner",
    comment:
      "Proin iaculis purus consequat sem cure digni tora entum suscipit rhoncus. ccusantiu mquam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
  },
  {
    image: Testimonial4,
    name: "John Larson",
    designation: "Entrepreneur",
    comment:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. ccusantiu mquam, ultricies eget id, aliquam eget nibh et. ",
  },
];

const Testimonial = () => {
  return (
    <TestimonialContainer>
      <section id="testimonials" className="testimonials section-bg">
        <div className="container">
          <div className="section-header">
            <h2>Testimonials</h2>
            <p>
              What Are They <span>Saying About Us</span>
            </p>
          </div>

          <Carousel className="testimonials-carousel">
            {data.map((item, index) => {
              return (
                <Carousel.Item className="testimonial-content" key={index + 1}>
                  <div className="img-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="testimonial-img"
                    />
                  </div>
                  <div className="text-container">
                    <p>
                      <RiDoubleQuotesL />
                      {item.comment}
                      <RiDoubleQuotesR />
                    </p>
                    <h3> {item.name} </h3>
                    <h4> {item.designation}</h4>
                    <div class="stars">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </section>
    </TestimonialContainer>
  );
};

export default Testimonial;

const TestimonialContainer = styled.div`
  .testimonials {
    height: 100h;
    padding: 2rem 0;
  }

  .testimonials .section-header {
    margin-bottom: 40px;
    h2 {
      text-align: center;
      font-size: 26px;
      color: #dfdfdf;
    }
    p {
      text-align: center;
      color: #f1f1f1;
      font-size: 2.5rem;
      font-family: "Amatic SC", cursive;
      span {
        font-family: "Amatic SC", cursive;
        color: #fd7474;
      }
    }
  }

  .testimonial-content {
    border-left: 3px solid #ce1212;
    padding: 4rem;
    display: flex;
    gap: 1rem;
    display: none;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 2.6rem;
    }
  }

  .testimonial-content.active {
    display: flex;
  }

  .img-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 220px;
      border-radius: 50%;
    }
  }
  .text-container {
    flex: 2;
    p {
      font-size: 18px;
      svg {
        color: #fd7474;
        font-size: 2rem;
      }
    }

    h3 {
      font-size: 20px;
      font-weight: bold;
      margin: 10px 0 5px 0;
    }
    .stars {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;

      @media (max-width: 768px) {
        justify-content: center;
      }

      svg {
        color: yellow;
        font-size: 25px;
        width: auto;
      }
    }

    p {
      font-style: italic;
      font-size: 1.1rem;
      font-weight: 200;
    }
    @media (max-width: 768px) {
      h3,
      h4 {
        text-align: center;
      }
    }
  }
`;
