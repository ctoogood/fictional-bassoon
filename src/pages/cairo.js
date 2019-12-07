import React from "react"
import styled from 'styled-components'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Hero = styled.section `
margin:0;
    position:relative;
        margin-top:2rem;
        margin-bottom:5rem;
        background-color:white;
        height:40vh;
        @media only screen and (min-width:720px) {
          height:75vh;
        }

    section {
        border-radius:5px;

            background-image: linear-gradient(
                hsla(0, 0%, 60%, 0.3),
                hsla(0, 0%, 60%, 0.3)),
                url('https://res.cloudinary.com/dhat0b0ey/f_auto,q_70/calumtoogood/projects/cairo/citadel-cairo.jpg');
            background-size: cover;
            background-position: center;

            position:relative;
            height:100%;
            width:100%;

            @media only screen and (min-width:720px) {
              background-attachment:fixed;

            }

        
    }
    
    div {
            display:block;
            border:2px solid white;
            position:absolute;
            max-width:100%;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
            padding:1rem;
    }

    h1 {
        font-family:Crimson Text;
        color:white;
        text-align:center;
        font-size:3rem;
        margin:0;
        line-height:0.7;
        padding:0;

        @media only screen and (min-width:720px) {
          font-size:5rem;
          padding:2rem;
        }

        
        span {
            opacity:0.8;
            margin:0;
            font-size:1rem;

            @media only screen and (min-width:720px) {
              font-size:2rem;
            }
        }
    }
`

const Main = styled.main `
    .project-text {
      text-align:center;

      h2 {
        font-family: Crimson Text;
        font-size:3rem;
      }

      p {
        font:1rem montserrat;
        line-height:1.5;
      }
    }

    .full-width-image {
      width:100%;
    }

    .half-width-image {
      @media only screen and (min-width:720px) {
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding:2rem;

        img {
            margin:auto;
            display: block;
            width:60vw;
        }
    }
}

.left {
    grid-column: 1/3;
}

.right {
    grid-column:2/4;
}

.center {
    grid-column:2/3;
}
    }

    .triple-image-row {
      margin-bottom:2rem;
      width:100%;
      text-align:center;

      @media only screen and (min-width:720px) {
        display: flex;

        img {
            width:33.3%;
            height:33.3%;
            object-fit: cover;
            margin-right:0.5rem;

        }
    }

    }

    .triple-image-collage {
      @media only screen and (min-width:720px) {
          display: grid;
          grid-gap:0.5rem;
          grid-template-columns:1fr 1fr 1fr;
          grid-template-rows:1fr 1fr;
          margin-bottom:2rem;

          img {
            margin:0;
          }
  
          img:first-child {
              grid-column: 1/3;
              grid-row:1/3;
          }
      }
  }

  .image-grid {
    padding-top:3rem;
    padding-bottom:3rem;

    img {
        padding-top:2rem;
    }

    @media only screen and (min-width:920px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap:2rem;
        padding: 3rem;
    }
    
}
`



const Cairo = () => (
  <Layout>
    <SEO title="Cairo" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>Cairo<br />
        <span>Egypt</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Cairo, Egypt</h2>
            <p class="project-text-content">Old Cairo is a fascinating place.  The following images show portraits and street scenes taken during visits to Cairo in 2013 & 2014.
                <br />I was primarily in Egypt to photograph more journalistic topics so walking through the streets of Old Cairo was a welcome escape from more politcally dominated subjects.
             </p>
        </article>

        <section class="project-images">

            <div class="triple-image-row">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/motorcyclist-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/motorcyclist-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/motorcyclist-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/motorcyclist-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/motorcyclist-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/motorcyclist-cairo.jpg 320w"
                    sizes="(min-width: 720px) 33.3vw, 100vw"
                    alt="Motorcyclist, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/busy-street-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/busy-street-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/busy-street-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/busy-street-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/busy-street-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/busy-street-cairo.jpg 320w"
                    sizes="(min-width: 720px) 33.3vw, 100vw"
                    alt="Busy street, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/commuter-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/commuter-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/commuter-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/commuter-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/commuter-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/commuter-cairo.jpg 320w"
                    sizes="(min-width: 720px) 33.3vw, 100vw"
                    alt="Man on minibus, Cairo" />
            </div>


            <div class="image-grid">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/street-vendor-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/street-vendor-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/street-vendor-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/street-vendor-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/street-vendor-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/street-vendor-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Vegetable seller, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/market-scene-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/market-scene-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/market-scene-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/market-scene-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/market-scene-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/market-scene-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Market scene, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/street-scene-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/street-scene-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/street-scene-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/street-scene-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/street-scene-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/street-scene-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Street scene, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/family-on-motorcycle-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/family-on-motorcycle-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/family-on-motorcycle-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/family-on-motorcycle-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/family-on-motorcycle-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/family-on-motorcycle-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Family on a motorcycle, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/motorcyclist-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/motorcyclist-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/motorcyclist-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/motorcyclist-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/motorcyclist-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/motorcyclist-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Motorcyclist, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/moped-cairo-1.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/moped-cairo-1.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/moped-cairo-1.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/moped-cairo-1.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/moped-cairo-1.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/moped-cairo-1.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Citadel view, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/butcher-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/butcher-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/butcher-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/butcher-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/butcher-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/butcher-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Butcher holding carcass, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/man-smoking-shisha-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/man-smoking-shisha-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/man-smoking-shisha-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/man-smoking-shisha-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/man-smoking-shisha-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/man-smoking-shisha-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Man smoking pipe on the street, Cairo" />
                    
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/man-outside-shop-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/man-outside-shop-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/man-outside-shop-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/man-outside-shop-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/man-outside-shop-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/man-outside-shop-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Shop keeper, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/men-smoking-in-the-street-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/men-smoking-in-the-street-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/men-smoking-in-the-street-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/men-smoking-in-the-street-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/men-smoking-in-the-street-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/men-smoking-in-the-street-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Two men smoking on the street, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/food-vendor-cairo-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/food-vendor-cairo-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/food-vendor-cairo-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/food-vendor-cairo-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/food-vendor-cairo-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/food-vendor-cairo-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Food vendor at roadside, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/man-surrounded-by-literature-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/man-surrounded-by-literature-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/man-surrounded-by-literature-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/man-surrounded-by-literature-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/man-surrounded-by-literature-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/man-surrounded-by-literature-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Man surrounded by literature, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/carpenter-cairo-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/carpenter-cairo-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/carpenter-cairo-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/carpenter-cairo-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/carpenter-cairo-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/carpenter-cairo-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Carpenter, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/bread-delivery-boy-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/bread-delivery-boy-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/bread-delivery-boy-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/bread-delivery-boy-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/bread-delivery-boy-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/bread-delivery-boy-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Boy with tray of bread, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/carpenter-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/carpenter-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/carpenter-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/carpenter-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/carpenter-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/carpenter-cairo.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Carpenter, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/backgammon-players.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/backgammon-players.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/backgammon-players.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/backgammon-players.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/backgammon-players.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/backgammon-players.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Backgammon players, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/butcher-cairo-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/butcher-cairo-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/butcher-cairo-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/butcher-cairo-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/butcher-cairo-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/butcher-cairo-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Butcher , Cairo" />
            </div>

            <div class="triple-image-collage">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/machinist-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/machinist-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/machinist-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/machinist-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/machinist-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/machinist-cairo.jpg 320w"
                    sizes="(min-width: 720px) 67vw, 100vw"
                    alt="Man working with laithe, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/nile-view-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/nile-view-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/nile-view-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/nile-view-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/nile-view-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/nile-view-cairo.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Nile view, Cairo" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/moped-rider-cairo.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/moped-rider-cairo.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/cairo/moped-rider-cairo.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/cairo/moped-rider-cairo.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/cairo/moped-rider-cairo.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/cairo/moped-rider-cairo.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Moped rider, Cairo" />
            </div>

        </section>

        </Main>
    
  </Layout>
)

export default Cairo