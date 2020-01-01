import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const LightboxEl = styled.div `
  .open-dialog {
    button {
      font:1.5rem josefin sans!important;
    }
  }
`

const LightboxContainer = styled.div`
  margin-top:3rem;
  max-width:1000px;
  margin:auto;
  margin-bottom:3rem;
  display: grid;
  grid-gap: 3rem;

  @media only screen and (min-width:720px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

  }
  

`;

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  
  .grid-image {
    @media only screen and (min-width:720px) {
      padding-top:100%;
      height:0;
    }
  }
`;

export default class Lightbox extends Component {
  static propTypes = {
    Images: PropTypes.array.isRequired, // eslint-disable-line
  }

  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      selectedImage: null,
    };
  }

  render() {
    const { Images } = this.props;
    const { selectedImage, showLightbox } = this.state;
    return (
      <LightboxEl>
        <LightboxContainer>
          {Images.map(image => (
            <PreviewButton
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() => this.setState({ showLightbox: true, selectedImage: image })}
            >
              <Img className="grid-image" fluid={image.node.childImageSharp.fluid} />
            </PreviewButton>
          ))}
        </LightboxContainer>
        {showLightbox && (
        <Dialog className="open-dialog">
          <Img className="open-image" fluid={selectedImage.node.childImageSharp.fluid} />
          <button type="button" className="closeButton" onClick={() => this.setState({ showLightbox: false })}>
            Close
          </button>
        </Dialog>
        )}
      </LightboxEl>
    );
  }
}