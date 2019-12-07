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
        min-height:300px;
        @media only screen and (min-width:720px) {
          height:75vh;
        }

    section {
        border-radius:5px;
        @media only screen and (min-width:720px) {
            background-image: linear-gradient(
                hsla(0, 0%, 60%, 0.3),
                hsla(0, 0%, 60%, 0.3)),
                url('https://res.cloudinary.com/dhat0b0ey/f_auto,q_70/calumtoogood/projects/fishing/fishermans-boots.jpg');
            background-size: cover;
            background-position: center;

            position:relative;
            height:100%;
            width:100%;

            
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
        margin-right:0.5rem;

        img {
            width:33.3%;
            height:33.3%;
            object-fit: cover;
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



const Fishing = () => (
  <Layout>
    <SEO title="Northern Seas Fishing" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>Northern Seas Fishing<br />
        <span>SHETLAND ISLANDS</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Northern Seas Fishing</h2>
            <p class="project-text-content">The waters surrounding Shetland are rich in marine life. They have been fished by many for centuries, providing a source of food and income. The fishing industry is the main source of income for the local economy and has become an integral part of Shetland life for many. The Shetland seafood industry is worth around £300 million annually, far more than any other industry in the isles.
                    <br />Many fishermen spend a huge part of their lives at sea, often battling the elements to get their catch. Sea conditions can be extreme around Shetland as winds can often gust over 100mph and wave heights have been known to reach over 15m high.
                    <br />This project was undertaken to catch a glimpse of the working lives of fishermen in the surrounding waters of Shetland. 
             </p>
        </article>

        <section class="project-images">

                <div class="triple-image-collage">
                        <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-operating-crane.jpg"
                            data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-operating-crane.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/fisherman-operating-crane.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/fisherman-operating-crane.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/fisherman-operating-crane.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-operating-crane.jpg 320w"
                            sizes="(min-width: 720px) 67vw, 100vw"
                            alt="Fisherman operating crane" />
        
                        <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fishing-boat-wheel-house.jpg"
                            data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fishing-boat-wheel-house.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/fishing-boat-wheel-house.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/fishing-boat-wheel-house.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/fishing-boat-wheel-house.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fishing-boat-wheel-house.jpg 320w"
                            sizes="(min-width: 720px) 33vw, 100vw"
                            alt="Wheelhouse view" />
        
                        <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-prolific.jpg"
                            data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-prolific.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/deck-view-prolific.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/deck-view-prolific.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/deck-view-prolific.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-prolific.jpg 320w"
                            sizes="(min-width: 720px) 33vw, 100vw"
                            alt="Deck view of a fishing boat" />
                </div>


            <div class="image-grid">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/winching-net-radiant-star.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/winching-net-radiant-star.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/winching-net-radiant-star.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/winching-net-radiant-star.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/winching-net-radiant-star.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/winching-net-radiant-star.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Fisherman watching net being winched in" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/seagulls-above-the-catch.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/seagulls-above-the-catch.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/seagulls-above-the-catch.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/seagulls-above-the-catch.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/seagulls-above-the-catch.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/seagulls-above-the-catch.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Seagulls flying above the catch" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/skipper-radiant-star.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/skipper-radiant-star.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/skipper-radiant-star.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/skipper-radiant-star.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/skipper-radiant-star.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/skipper-radiant-star.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Skipper looking out of the wheelhouse" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/stormy-view-from-wheelhouse.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/stormy-view-from-wheelhouse.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/stormy-view-from-wheelhouse.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/stormy-view-from-wheelhouse.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/stormy-view-from-wheelhouse.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/stormy-view-from-wheelhouse.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Stormy wheelhouse view" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/mackerel-in-chute-scombrus.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/mackerel-in-chute-scombrus.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/mackerel-in-chute-scombrus.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/mackerel-in-chute-scombrus.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/mackerel-in-chute-scombrus.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/mackerel-in-chute-scombrus.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Mackerel in a chute" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-working-with-net.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-working-with-net.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/fisherman-working-with-net.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/fisherman-working-with-net.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/fisherman-working-with-net.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-working-with-net.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Fisherman working with the net" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/net-mending-tranquility.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/net-mending-tranquility.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/net-mending-tranquility.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/net-mending-tranquility.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/net-mending-tranquility.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/net-mending-tranquility.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Fishermen mending the net" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/net-mending-radiant-star.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/net-mending-radiant-star.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/net-mending-radiant-star.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/net-mending-radiant-star.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/net-mending-radiant-star.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/net-mending-radiant-star.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Net mending close-up" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-with-hook.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-with-hook.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/fisherman-with-hook.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/fisherman-with-hook.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/fisherman-with-hook.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-with-hook.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Fisherman holding hook" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-operating-winch.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-operating-winch.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/fisherman-operating-winch.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/fisherman-operating-winch.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/fisherman-operating-winch.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-operating-winch.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Fisherman operating a winch" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-guiding-light.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-guiding-light.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/deck-view-guiding-light.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/deck-view-guiding-light.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/deck-view-guiding-light.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-guiding-light.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Men working on the deck of a fishing vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-ties-cod-end.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-ties-cod-end.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/fisherman-ties-cod-end.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/fisherman-ties-cod-end.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/fisherman-ties-cod-end.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/fisherman-ties-cod-end.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Fisherman ties the cod end of the net" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/cod-end.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/cod-end.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/cod-end.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/cod-end.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/cod-end.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/cod-end.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="The cod-end filled with fish" />
                
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-radiant-star.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-radiant-star.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/deck-view-radiant-star.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/deck-view-radiant-star.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/deck-view-radiant-star.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-radiant-star.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Deck view of a fishing vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/cod-end-alongside-fishing-boat.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/cod-end-alongside-fishing-boat.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/cod-end-alongside-fishing-boat.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/cod-end-alongside-fishing-boat.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/cod-end-alongside-fishing-boat.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/cod-end-alongside-fishing-boat.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="The cod-end alongside the boat" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-scombrus.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-scombrus.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/deck-view-scombrus.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/deck-view-scombrus.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/deck-view-scombrus.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/deck-view-scombrus.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Deck view in the early morning" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/bow-view-voyager.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/bow-view-voyager.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/bow-view-voyager.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/bow-view-voyager.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/bow-view-voyager.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/bow-view-voyager.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Bow of a fishing vessel alongside" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/arriving-in-peterhead.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/arriving-in-peterhead.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/fishing/arriving-in-peterhead.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/fishing/arriving-in-peterhead.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/fishing/arriving-in-peterhead.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/fishing/arriving-in-peterhead.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Crew on deck as the vessel arrives in port" />

            </div>

        </section>

        </Main>
    
  </Layout>
)

export default Fishing