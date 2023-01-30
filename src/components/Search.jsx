import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Search() {
  const [input, setInput] = useState("");

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${input}`);

    console.log(e);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch
          style={{ right: input ? "-10%" : "20%" }}
          onClick={submitHandler}
        />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 18px;
    color: white;
    padding: 10px 12px;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
    transition: all 0.5s;
    cursor: pointer;
  }
`;

export default Search;
