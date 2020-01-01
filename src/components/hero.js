import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
    query {
      file(name: { eq: "fisherman-ties-cod-end" }) {
        childImageSharp {
          fluid(maxWidth:2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `}
    render={data => {
      // Set ImageData.
      const imageData = data.file.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div>
            <h1>CALUM<br />TOOGOOD <br /><span>PHOTOGRAPHY</span></h1>
        </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  min-height:200px;
  height:30vh;
  background-position: center center;
  background-repeat: repeat-y;
  background-size: cover;
  overflow:hidden;
  background-attachment:fixed;


  @media only screen and (min-width:720px) {
    height:70vh;

  }
  
  


  div {
        border:2px solid white;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
    
}

h1 {
    font-family:Josefin Sans;
    font-weight:400;
    font-size:1.5rem;
    color:white;
    text-align:center;
    line-height:1.3;
    margin-bottom:0;
    padding:1rem;
    
    span {
        font-weight:300;
    }

    @media only screen and (min-width:720px) {
      font-size:4rem;
    }
}
`

export default StyledBackgroundSection