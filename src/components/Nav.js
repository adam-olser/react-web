import styled from "styled-components";
import { NavLink } from "react-router-dom"

const Nav = () => {
  return(
      <StyledNav>
        <h1>
          <NavLink id='logo' to='/'>Capture</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to='/'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/work'>Our Work</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact Us</NavLink>
          </li>
        </ul>
      </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a{
    color: white;
    text-decoration: none;
  }
  ul{
    display: flex;
    list-style: none;
  }
  h1{
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li{
    padding-left: 10rem;
    position: relative;
  }
  #logo{
    font-size: 1.5rem;
  }
`

export default Nav