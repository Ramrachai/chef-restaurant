import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

function Recipe() {
  let { name } = useParams();
  console.log("router name:", name);

  const [activeTab, setActiveTab] = useState("instructions");

  const queryName = `detail-${name}`;
  const api_url = `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`;

  const { isLoading, data, error } = useQuery(
    queryName,
    async () => {
      const { data } = await axios(api_url);
      return data;
    },
    {
      staleTime: 900000,
      cacheTime: 1200000,
    }
  );

  console.log("detail page data:", data);
  {
    isLoading && <Loading>Loading...</Loading>;
  }

  {
    error && <Loading> {error} </Loading>;
  }

  return (
    <DetailWrapper>
      <PageTitle className="page_title">
        A quick overview of the menu and <span> its magic recipe </span>{" "}
      </PageTitle>
      <ImageWrapper className="imageWrapper">
        <h2>{data?.title}</h2>
        <img src={data?.image} alt="" />
      </ImageWrapper>
      <Info>
        <BtnContainer>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </BtnContainer>

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: data?.summary }}></p>
            <br />
            <p dangerouslySetInnerHTML={{ __html: data?.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {data?.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}
export default Recipe;

const PageTitle = styled.h3`
  width: 100%;
  text-align: center;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  color: whitesmoke;
  font-family: "Amatic SC", cursive;
  span {
    color: #c10048;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const Loading = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: whitesmoke;
  font-size: 1rem;
  font-style: italic;
`;
const ImageWrapper = styled.div`
  flex: 1;
  h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
const DetailWrapper = styled.div`
  margin: 2rem 10%;
  display: flex;
  color: whitesmoke;
  flex-wrap: wrap;
  gap: 1.2rem;

  @media (max-width: 768) {
    margin: 5rem 2%;
  }

  .active {
    background: #c10048;
    color: #fff;
  }

  p {
    color: whitesmoke;
    line-height: 1.25rem;
    font-weight: 200;
  }

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
    color: whitesmoke;
  }

  li {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;

    @media (max-width: 865px) {
      margin-left: 1rem;
    }
  }
  a {
    text-decoration: none;
  }

  img {
    border-radius: 0.5rem;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.27);
  }

  @media (max-width: 1400px) {
    img {
      width: 450px;
    }
  }

  @media (max-width: 1120px) {
    img {
      width: 350px;
    }
  }

  @media (max-width: 865px) {
    flex-direction: column;

    img {
      width: 100%;
    }

    .imageWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background: #1a202c;
    color: var(--gray-50);
  }
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  max-width: 100%;

  ul {
    margin-top: 0;
  }

  @media (max-width: 865px) {
    button {
      width: 100%;
    }
    margin-top: 2rem;
    margin-left: 0;
  }
`;
