import {graphql} from 'gatsby'

export const imageFragment = graphql`
fragment imageFragment on File {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
}
`;