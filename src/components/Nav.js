import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <StyledNav>
      <h1>
        <NavLink id="logo" to="/">
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">About Us</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <NavLink to="/work">Our Work</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  h1 {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  #logo {
    font-size: 1.5rem;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 1rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
    }
    li {
      padding: 0;
    }
    #logo {
      display: inline-block;
      font-size: 2rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background-color: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 25%;
  }
`;

export default Nav;
