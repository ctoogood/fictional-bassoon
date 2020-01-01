import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'


const InstaContainer = styled.section `
    padding:1rem;
    @media only screen and (min-width:720px) {
        max-width:900px;
        margin:auto;
    }

    h2 {
        text-align:center;
        font-family:josefin sans;
        font-weight:600;

        @media only screen and (min-width:720px) {
            text-align:left;
        }
    }

    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #ccc;
        padding: 0;
      }


.instagram-grid {
    @media only screen and (min-width:720px) {
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap:1rem;
    }

    .image-container {
        margin-bottom:2rem;
        @media only screen and (min-width:720px) {
            margin:0;
        }
    }

    .post-image {
        padding-top:100%;
        height:0;
        transition:opacity 0.3s linear;

        &:hover {
            opacity:0.7;
        }
    }
}
    
`


const Instagram = () => (
    <StaticQuery
    query={POSTS_QUERY}
    render={({allInstaNode}) => (
      <>
        <InstaContainer>
        <h2>Latest Images</h2>
        <hr />
        <section className="instagram-grid">
          
        {allInstaNode.edges.map(edges => (
            <section className="image-container">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/calumtoogood/">
                <Img className="post-image" fluid={edges.node.localFile.childImageSharp.fluid}
            alt={edges.node.caption} />
            </a>
          </section>
          
        ))}

            </section>

        </InstaContainer>
      </>
    )}
  />
  )
  
  export default Instagram

  const POSTS_QUERY = graphql`
query postQuery {
	allInstaNode(limit: 9, sort: {order: DESC, fields: timestamp}) {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
  }
  `