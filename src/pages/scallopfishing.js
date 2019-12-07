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
        min-height:300px;
        height:40vh;
        @media only screen and (min-width:720px) {
          height:75vh;
        }

    section {
        border-radius:5px;

            background-image: linear-gradient(
                hsla(0, 0%, 60%, 0.3),
                hsla(0, 0%, 60%, 0.3)),
                url('https://res.cloudinary.com/dhat0b0ey/f_auto,q_70/calumtoogood/projects/scallopfishing/scallop-dredge-teeth.jpg');
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



const ScallopFishing = () => (
  <Layout>
    <SEO title="Scallop Fishing" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>Scallop Fishing<br />
        <span>SHETLAND ISLANDS</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Scallop Fishing, Shetland</h2>
            <p class="project-text-content">Scallops are fished throughout the year in the surrounding waters of Shetland.  Small boats fish for the shellfish using a series of dredges which are towed along the seabed.
                <br />The crew will periodically raise the dredges and empty the contents on to the deck to collect the scallops. Once ashore, the scallops are collected by companies for processing and resale as scallop meat.
             </p>
        </article>

        <section class="project-images">

            <div class="triple-image-collage">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-12.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-12.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-12.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-12.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-12.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick.jpg 320w"
                    sizes="(min-width: 720px) 67vw, 100vw"
                    alt="Baskets of scallops on deck" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-7.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-7.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-7.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-7.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-7.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-7.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Working with wires aboard scallop vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-11.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-11.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-11.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-11.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-11.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-11.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Coloured buoys along the side of the vessel" />

            </div>

            <div class="image-grid">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-6.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-6.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-6.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-6.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-6.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-6.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Scallops on the deck of the vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-10.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-10.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-10.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-10.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-10.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-10.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Scallop dredges lifting out of the water" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallops-in-basket-shetland.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallops-in-basket-shetland.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallops-in-basket-shetland.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallops-in-basket-shetland.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallops-in-basket-shetland.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallops-in-basket-shetland.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Scallops being placed in a basket" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-9.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-9.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-9.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-9.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-9.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-9.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Picking up scallops" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-8.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-8.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-8.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-8.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-8.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-8.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Picking up scallops" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker emptying scallop dredge" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-4.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-4.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-4.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-4.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-4.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-4.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Full scallop dredges alongside the vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker picking up scallop shells" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-1.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-1.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-1.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-1.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-1.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-1.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Deck view of a scallop vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-3.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-3.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-mari-dawn-3.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker operating crane" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-4.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-4.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-4.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-4.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-4.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-4.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker emptying dredges" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-3.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-3.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-3.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker emptying dredges" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-arctic-solitaire-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker operating winch" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-kestrel.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-kestrel.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-fishing-kestrel.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-fishing-kestrel.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-fishing-kestrel.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-fishing-kestrel.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Scallop vessel at sea" />

            </div>

            <div class="full-width-image">

                 <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-shells.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-shells.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/scallopfishing/scallop-shells.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/scallopfishing/scallop-shells.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/scallopfishing/scallop-shells.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/scallopfishing/scallop-shells.jpg 320w"
                    sizes="100vw"
                    alt="Scallop shells close-up" />

            </div>
            
            

            

        </section>

        </Main>
    
  </Layout>
)

export default ScallopFishing