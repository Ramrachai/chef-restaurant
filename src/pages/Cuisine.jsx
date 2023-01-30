import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "react-query";
// import "./CuisineStyle.scss";

function Cuisine() {
  let { type } = useParams();

  const fetchData = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${type}&number=40`
    );
    const data = await res.json();
    return data.results;
  };

  const { data, isLoading } = useQuery(`catData-${type}`, fetchData, {
    staleTime: 900000,
    cacheTime: 1200000,
  });

  return (
    <>
      {isLoading && <Loading>Data is loading....</Loading>}

      {data && (
        <CuisineContainer>
          <h2 className="cat-title">
            Popular <span>{type}</span> Food items
          </h2>
          <motion.div
            className="cuisine-container"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {data.map((recipe) => {
              return (
                <div className="card" key={recipe.id}>
                  <Link to={`/recipe/${recipe.id}`} className="content">
                    <img src={recipe.image} alt={recipe.title} />
                    <h4 className="title">{recipe.title}</h4>
                  </Link>
                </div>
              );
            })}
          </motion.div>
        </CuisineContainer>
      )}
    </>
  );
}

export default Cuisine;

const Loading = styled.p`
  color: #ca2061;
  text-align: center;
  padding: 10px;
  font-size: 18px;
`;

const CuisineContainer = styled.div`
  margin: 0 10%;
  @media (max-width: 768px) {
    margin: 0 2%;
  }
  .cat-title {
    color: white;
    text-align: center;
    font-size: 16;
    font-family: "Amatic SC", cursive;
    margin-top: 1rem;
    padding: 1rem 0;
    span {
      color: #fd7474;
      text-transform: uppercase;
      text-decoration: underline;
    }
  }

  .cuisine-container {
    margin-top: 5vh;
    margin-bottom: 100px;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
  }
  .card {
    --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
    max-width: 320px;
    max-height: 220px;
    padding: 5px;
    border-radius: 1rem;
    overflow: visible;
    background: #f7ba2b;
    position: relative;
    z-index: 1;
    transition: all 0.5s;
    cursor: pointer;
    @media (max-width: 700px) {
      max-width: 220px;
    }
  }

  .card::after {
    position: absolute;
    content: "";
    top: 30px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    transform: scale(0.8);
    filter: blur(25px);
    background: #f7ba2b;
    transition: all 0.5s;
  }

  .content {
    max-width: 300px;
    max-height: 200px;
    overflow: hidden;

    @media (max-width: 700px) {
      max-width: 200px;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 1rem;
      transition: all 0.5s cubic-bezier(0.35, 0.1, 0.25, 1);
    }

    .title {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      color: white;
      font-size: 14px;
      text-align: center;
      opacity: 0;
      transition: 0.5s;
    }
  }

  .card:hover::after {
    opacity: 0;
  }

  .card:hover .title {
    opacity: 1;
    padding: 0.8rem;
    background: rgb(55 55 63 / 60%);
  }

  .card:hover img {
    filter: blur(2px);
  }
`;
