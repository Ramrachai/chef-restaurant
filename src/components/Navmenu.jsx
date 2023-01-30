import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoPic from "../assets/images/logo-2.png";
import { TbSoup } from "react-icons/tb";
import { BiCookie, BiDrink } from "react-icons/bi";
import { GiBroccoli, GiCakeSlice, GiForkKnifeSpoon } from "react-icons/gi";
import { MdOutlineDinnerDining, MdOutlineFreeBreakfast } from "react-icons/md";
import Search from "./Search";
function BasicExample() {
  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={LogoPic} alt="recipe logo" height={100} width={"auto"} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex w-100 justify-content-end align-items-center">
            <SLink to="/type/breakfast">
              <MdOutlineFreeBreakfast />
              <h4>breakfast</h4>
            </SLink>

            <SLink to="/type/main course">
              <MdOutlineDinnerDining />
              <h4>main</h4>
            </SLink>

            <SLink to="/type/appetizer">
              <GiForkKnifeSpoon />
              <h4>appetizer</h4>
            </SLink>

            <SLink to="/type/dessert">
              <GiCakeSlice />
              <h4>dessert</h4>
            </SLink>

            <SLink to="/type/soup">
              <TbSoup />
              <h4>soup</h4>
            </SLink>

            <SLink to="/type/drink">
              <BiDrink />
              <h4>drinks</h4>
            </SLink>

            <SLink to="/type/salad">
              <GiBroccoli />
              <h4>salad</h4>
            </SLink>
          </Nav>

          <Nav>
            <Search />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

// Styled components starts here============
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transform: scale(0.9);

  h4 {
    color: #c5c5c5;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1.2;
    transition: all 0.4s;
  }

  svg {
    color: white;
    font-size: 1.6rem;
    transition: all 0.4s;
  }

  &.active {
    svg {
      color: #d40050;
    }

    h4 {
      color: #d40050;
    }
  }

  &:hover {
    svg {
      color: #d40050;
    }

    h4 {
      color: #d40050;
    }
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 40px;
    height: 40px;

    h4 {
      font-size: 0.9rem;
    }
  }
`;
