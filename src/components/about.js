import React from 'react'
import styled from 'styled-components'
import Instagram from './instagram'

const AboutContainer = styled.section `
    margin:2rem;

@media only screen and (min-width:720px) {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:1rem;
}

hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
  }
`

const InstagramSection = styled.section `
  grid-column:2/4
`

const TextSection = styled.section `
  text-align:center;
  @media only screen and (min-width:720px) {
    text-align:left;
}
  h1 {
      font-family:josefin Sans;
      font-weight:600;
  }

  p {
    font-family:montserrat;
  }
`


const About = () => (
    <AboutContainer>
        <TextSection>
            <h1>About</h1>
            <hr />
            <p>I'm a keen photographer from the Shetland Islands.  I like to photograph a wide range of subjects such as the outdoors, travel, & industry.</p>
            <p>I studied photography at college & photojournalism at university.  As well as a collection of photographic projects, I also have a series of my reportage/photojournlism work on display in the photojournalism section(coming soon).</p>
            <p>I also design & build websites, you can see them by visiting the web design section(also coming soon)</p>
        </TextSection>
        <InstagramSection>
            <Instagram />
        </InstagramSection>

    </AboutContainer>
  )
  
  export default About