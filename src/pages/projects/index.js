import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout'
import {Link, graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../../components/seo'

const Main = styled.main `
    max-width:800px;
    margin:auto;
    margin-top:2rem;

    H1 {
        font:2rem Josefin Sans;
        text-align:center;
        margin:3rem;

        @media only screen and (min-width:720px) {
            font-size:3.5rem
        }
    }

    .project-list {
        margin:0.5rem;

        p {
            font-family:Josefin Sans;
            font-size:2rem;
            text-align:center;
            color: white;
            

            @media only screen and (min-width:720px) {
                font-size:3.5rem
            }
        }

        a {
            text-decoration:none;
            color:inherit;

            &:hover .photography-project {
                opacity:1;
            }
        }

        .photography-project {
            height:50vh;
            opacity:0.8;
            transition:opacity 0.5s linear;
        }
    }

    .project-container {
        position:relative;
        margin-bottom:3rem;
        background-color:black;
        border-radius:7px;
        overflow:hidden;
    }

    .text-container {
        position:absolute;
        top:60%;
        left:50%;
        transform:translate(-50%, -50%);
    }

    
`

const ProjectPage = () => (
    <Layout>
    <SEO title="PROJECTS"/>
    <Main>
    <h1>PORTFOLIO</h1>
    <StaticQuery
    query={PORTFOLIO_QUERY}

    render={data => 

        <section class="project-list">
        
        <div className="project-container">
        <Link to="projects/industry">
            <Img className="photography-project" fluid={data.industry.childImageSharp.fluid} imgStyle={{objectPosition:`bottom center`}}/>
            <div className="text-container">
                <p>INDUSTRY</p>
            </div> 
        </Link>
        </div>
        
            
        <div className="project-container">
        <Link to="projects/outdoors">
            <Img className="photography-project" fluid={data.outdoors.childImageSharp.fluid} />
            <div className="text-container">
                <p>OUTDOORS</p>
            </div>
        </Link>
        </div>

        <div className="project-container">
        <Link to="projects/travel">
            <Img className="photography-project" fluid={data.travel.childImageSharp.fluid} />
            <div className="text-container">
                <p>TRAVEL</p>
            </div>
        </Link>
        </div>

        <div className="project-container">
        <Link to="projects/food">
            <Img className="photography-project" fluid={data.food.childImageSharp.fluid} />
            <div className="text-container">
                <p>FOOD</p>
            </div> 
        </Link>
        </div>
            
        {/*<div className="project-container">
        <Link to="projects/shetland">
            <Img className="photography-project" fluid={data.shetland.childImageSharp.fluid} />
            <div className="text-container">
                <p>SHETLAND</p>
            </div>
        </Link>
    </div>*/}
    </section>
    }
    />
</Main>
</Layout>
)

export default ProjectPage

const PORTFOLIO_QUERY = graphql`
query {
  industry: file(name: { eq: "industry" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    outdoors: file(name: { eq: "outdoors" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    travel:file(name: { eq: "travel" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    food:file(name: { eq: "food" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shetland:file(name: { eq: "IMG_3826" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`