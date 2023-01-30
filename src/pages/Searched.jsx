import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const API_KEY = "999fc998c0314ed1855887bd39fa55ec";
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&number=60`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((recipe) => {
        return (
          <Card key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`} className="content">
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  margin: 2rem 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

  @media (max-width: 768px) {
    margin: 1rem 2%;
  }
`;

const Card = styled.div`
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

  &::after {
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

  &:hover::after {
    opacity: 0;
  }

  &:hover img {
    filter: blur(2px);
  }

  .content {
    max-width: 300px;
    max-height: 200px;
    overflow: hidden;
    text-decoration: none;

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

    h4 {
      font-size: 1rem;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 1rem;
      background: #00000085;
      backdrop-filter: blur(4px);
      width: 100%;
      opacity: 0;
      transition: all 0.5s;
    }

    &:hover {
      h4 {
        opacity: 1;
      }
    }
  }
`;
export default Searched;
