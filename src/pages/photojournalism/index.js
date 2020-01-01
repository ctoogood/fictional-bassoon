import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {graphql, StaticQuery} from 'gatsby'
import SEO from '../../components/seo'
import Lightbox from '../../components/lightbox'

const Main = styled.main `
    max-width:1200px;
    margin:auto;

    h1 {
      font-family:Josefin Sans;
      font-weight:normal;
      font-size:2rem;
      text-align:center;
      

      @media only screen and (min-width:720px) {
          font-size:3.5rem
      }
    }

    .images-list {
    }

    .hero-container {
      position:relative;
      margin:4rem;

      h1 {
        color:black;
      }
    }


`

const ProjectPage = () => (
    <Layout>
    <SEO title="PHOTOJOURNALISM"/>
    <Main>
    <StaticQuery
    query={PORTFOLIO_QUERY}
    render={data => 
      <section> 
        <section className="hero-container">
          <h1>PHOTOJOURNALISM</h1>
        </section>
        <Lightbox Images={data.Images.edges} />
      </section>}
  />
</Main>
</Layout>
)

export default ProjectPage

const PORTFOLIO_QUERY = graphql`
query {
  Images: allFile(filter: {relativeDirectory: { eq: "photojournalism" }}) {
    edges {
      node {
        childImageSharp {
          fluid(maxWidth:2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  Hero: file(name: { eq: "DSC07797" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
