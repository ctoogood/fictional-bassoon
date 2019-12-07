import React from "react"
import Slider from "react-slick";
import { StaticQuery, graphql, Link } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const ContentSlider = styled.section `
    height:75vh;
    position:relative;



    section {
        background-color:black;
        background-size: cover;
        background-position: center;
        background-attachment:fixed;

        height:75vh;
        width:100%;
    }

    .firstSlide {
        background-image: linear-gradient(
            hsla(0, 0%, 60%, 0.3),
            hsla(0, 0%, 60%, 0.3)),
            url('https://res.cloudinary.com/dhat0b0ey/image/upload/v1536524675/calumtoogood/main/fisherman-ties-cod-end.jpg');
            background-attachment:fixed;

    }

    .secondSlide {
        background-image: linear-gradient(
            hsla(0, 0%, 60%, 0.3),
            hsla(0, 0%, 60%, 0.3)),
            url('https://res.cloudinary.com/dhat0b0ey/image/upload/v1536524860/calumtoogood/main/dore-holm-large-waves.jpg');
    }

    .thirdSlide {
        background-image: linear-gradient(
            hsla(0, 0%, 60%, 0.3),
            hsla(0, 0%, 60%, 0.3)),
            url('https://res.cloudinary.com/dhat0b0ey/image/upload/v1540143257/calumtoogood/projects/salmonfarming/lice-checks-salmon-farming-2.jpg');

    }

    .fourthSlide {
        background-image: linear-gradient(
            hsla(0, 0%, 60%, 0.3),
            hsla(0, 0%, 60%, 0.3)),
            url('https://res.cloudinary.com/dhat0b0ey/image/upload/v1536526654/calumtoogood/main/gas-cutting-malakoff-shetland.jpg');
    }
`

var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

  };

const SimpleSlider = () => (
        <ContentSlider>
        <Slider {...settings} className="SliderContainer" style={{
            maxHeight:`80vh`,
            minHeight:`400px`,
        }}>
            <section className="firstSlide">
                <div>
                    <h1>CALUM<br />TOOGOOD <br /><span>PHOTOGRAPHY</span></h1>
                </div>
            </section>
            <section className="secondSlide">2</section>
            <section className="thirdSlide">3</section>
            <section className="fourthSlide">4</section>

      </Slider>
        
      </ContentSlider>
)


export default SimpleSlider