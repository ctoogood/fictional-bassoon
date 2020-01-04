import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import {graphql, StaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'

const Main = styled.main `
    max-width:800px;
    margin:auto;
    margin-top:2rem;

    H1 {
        font:1.5rem Josefin Sans;
        text-align:center;
        margin:2rem;



        @media only screen and (min-width:720px) {
            font-size:3.2rem
        }
    }

    p {
        font:1rem Josefin Sans;
        text-align:center;
        font-weight:lighter;
        margin-bottom:3rem;
        line-height:1.5;

        @media only screen and (min-width:720px) {
            font-size:1.5rem;
        }
    }

    .project-list {
        margin:0.5rem;

        h2,h3 {
            font-family:Josefin Sans;
            font-size:2rem;
            text-align:center;
            color: black;
            line-height:1.2;
            font-weight:normal;
            margin-bottom:0;
            margin-top:2rem;
            

            @media only screen and (min-width:720px) {
                font-size:3.5rem
            }
        }

        h3 {
            font-size:1.5rem;
            font-weight:lighter;
            margin-top:0;
        }

        a {
            text-decoration:none;
            color:inherit;

        }

        .photography-project {
            height:auto;
            width:auto;
            max-width:800px;
            margin:auto;
            border-radius:7px;
            box-shadow: 0px 5px 5px rgba(0,0,0,0.1);


        }
    }

    .project-container {
        position:relative;
        margin-bottom:3rem;
        border-radius:7px;
        overflow:hidden;

        h2 {
            font-size:2.5rem;
        }
    }

    .text-container {
        position:relative;
    }

    
`

const ProjectPage = () => (
    <Layout>
    <SEO title="WEB DESIGN"/>
    <Main>
    <h1>WEB DESIGN</h1>
    <p>I design websites with Adobe Photoshop, XD and html & CSS.  I use the static-site generator GatsbyJS to build most sites and deploy them using Netlify. I am also familiar with other technologies such as Git, NPM & NodeJS. </p>
    <StaticQuery
    query={PORTFOLIO_QUERY}

    render={data => 

        <section class="project-list">
        
        <div className="project-container">
        <a href="https://www.wildnorthernisles.com" target="_blank" rel="noopener noreferrer">
        <div className="text-container">
                <h2>WILD NORTHERN ISLES</h2>
                <h3>A guide to Shetland's outdoors</h3><br />
            <Img className="photography-project" fluid={data.wni.childImageSharp.fluid} /> 
            <br />
                <h3>Wild Northern Isles is a website containing a selection of ideas for walks and other outdoor activities in the Shetland Islands.  It is built using GatsbyJS.</h3>
            </div>
        </a>
        </div>
        
        <hr />

        <div className="project-container">
        <a href="https://www.calumtoogood.com" target="_blank" rel="noopener noreferrer">
        <div className="text-container">
                <h2>Calum Toogood</h2>
                <h3>Personal Portfolio Site</h3><br />
            <Img className="photography-project" fluid={data.ctp.childImageSharp.fluid} /> 
            <br />
                <h3>This site!</h3>
            </div>
        </a>
        </div>
        
        <hr />

        <div className="project-container">
        <a href="https://wonderful-booth-7f5bf9.netlify.com/" target="_blank" rel="noopener noreferrer">
        <div className="text-container">
                <h2>THE JOHN DORY</h2>
                <h3>Culinary Tales</h3>
                <br />
            <Img className="photography-project" fluid={data.jds.childImageSharp.fluid} imgStyle={{objectPosition:`center center`}} />
            <br />
                <h3>A mock-up of a food photography blog.  It is built using GatsbyJS.</h3>
            </div>
        </a>
        </div>

        <hr />


        <div className="project-container">
        <a href="https://www.otherwitness.com" target="_blank" rel="noopener noreferrer">
        <div className="text-container">
                <h2>OTHER WITNESS</h2>
                <h3>Human Rights Journalism</h3>
                <br />
            <Img className="photography-project" fluid={data.ow.childImageSharp.fluid} imgStyle={{objectPosition:`center center`}} />
            <br />
                <h3>Other Witness is a human rights journalism based blog.  It is built using GatsbyJS.</h3>
            </div>
        </a>
        </div>
    </section>
    }
    />
</Main>
</Layout>
)

export default ProjectPage

const PORTFOLIO_QUERY = graphql`
query {
  wni: file(name: { eq: "wni" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jds: file(name: { eq: "jds" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ow:file(name: { eq: "ow" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ctp:file(name: { eq: "ctp2" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`