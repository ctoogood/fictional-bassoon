import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
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
      height:60vh;
      margin-bottom:4rem;

      .hero-image {
        height:100%;
        filter:brightness(0.8);
      }

      h1 {
        position:absolute;
        transform:translate(-50%,-50%);
        top:50%;
        left:50%;
        color:white;
      }
    }


`

const ProjectPage = () => (
    <Layout>
    <SEO title="INDUSTRY"/>
    <Main>
    <StaticQuery
    query={PORTFOLIO_QUERY}
    render={data => 
      <section> 
        <section className="hero-container">
          <Img className="hero-image" fluid={data.Hero.childImageSharp.fluid} />
          <h1>INDUSTRY</h1>
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
  Images: allFile(filter: {relativeDirectory: { eq: "industry" }}) {
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
  Hero: file(name: { eq: "industry_007" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
