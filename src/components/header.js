import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Main = styled.header `
  width:100%;
  margin-top:1rem;
  @media only screen and (max-width:720px) {
    box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
  }

  h1 {
    font-family:Josefin Sans;
    font-weight:400;
    text-align:center;
    color: #424141;
    font-size:1.8rem;
    margin:0;
  }

  .link {
    text-decoration:none;
    color:inherit;
  }
`

const Menu = styled.section `
  text-align:center;
  font-family:Josefin Sans;
  font-weight:400;
  color: #707070;
  padding-bottom:1rem;

  Link {
    font-size:1.2rem;

  }

`


const Header = ({ siteTitle }) => (
  <Main>
    <div>
      <h1>
        <Link className="link" to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Menu>
      <Link className="link" to="/projects">PHOTOGRAPHY</Link> | 
      <Link className="link" to="/webdesign"> WEB DESIGN</Link> | 
      <Link className="link" to="/photojournalism"> PHOTOJOURNALISM</Link>
    </Menu>
  </Main>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
