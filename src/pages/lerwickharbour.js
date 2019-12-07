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

            background-image: linear-gradient(
                hsla(0, 0%, 60%, 0.3),
                hsla(0, 0%, 60%, 0.3)),
                url('https://res.cloudinary.com/dhat0b0ey/f_auto,q_70/calumtoogood/projects/lerwickharbour/pilot-vessel-lerwick-2.jpg');
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



const LerwickHarbour = () => (
  <Layout>
    <SEO title="Lerwick Harbour" />
    <Main>
    <Hero>
      <section>

      </section>
      <div>
        <h1>Lerwick Harbour<br />
        <span>SHETLAND ISLANDS</span></h1>
      </div>
            
        </Hero>

        <article class="project-text">
            <h2 class="project-text-title">Lerwick harbour, Shetland</h2>
            <p class="project-text-content">A busy port in the Shetland Islands with traffic mainly from fishing, oil and cruise vessels.
                <br />This collection of images feature harbour based scenes I've captured from 2016 and onwards.
             </p>
        </article>

        <section class="project-images">

                <div class="triple-image-row">
                    <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick.jpg"
                            data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick.jpg 320w"
                            sizes="(min-width: 720px) 33vw, 100vw"
                            alt="Offshore vessel arriving in port" />

                    <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/crystal-symphony-cruise-ship-lerwick-harbour.jpg"
                            data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/crystal-symphony-cruise-ship-lerwick-harbour.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/crystal-symphony-cruise-ship-lerwick-harbour.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/crystal-symphony-cruise-ship-lerwick-harbour.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/crystal-symphony-cruise-ship-lerwick-harbour.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/crystal-symphony-cruise-ship-lerwick-harbour.jpg 320w"
                            sizes="(min-width: 720px) 33vw, 100vw"
                            alt="Bow of a cruise ship" />

                    <img class="lazy"
                            src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick-2.jpg"
                            data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick-2.jpg"
                            srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick-2.jpg 320w"
                            sizes="(min-width: 720px) 33vw, 100vw"
                            alt="Fishing vessel passing lighthouse in stormy seas" />
                </div>

                <article class="project-text">
                        <h2 class="project-text-title">Vessel Operations</h2>
                    </article>

            <div class="image-grid">
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Harbour staff tying up vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/standby-vessel-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/standby-vessel-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/standby-vessel-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/standby-vessel-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/standby-vessel-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/standby-vessel-lerwick.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Standby vessel in calm seas" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-4.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-4.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-4.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-4.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-4.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-4.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Harbour staff tying up vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-3.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-3.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-3.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-3.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-3.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick-3.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Harbour staff tying up vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/tying-up-vessel-lerwick.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Harbour staff tying up vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/ships-bow-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/ships-bow-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/ships-bow-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/ships-bow-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/ships-bow-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/ships-bow-lerwick.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Ship's bow moving through water" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/sailing-vessel-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/sailing-vessel-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/sailing-vessel-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/sailing-vessel-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/sailing-vessel-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/sailing-vessel-lerwick.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Sailing vessel in stormy seas" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/offshore-supply-vessel-lerwick-harbour.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/offshore-supply-vessel-lerwick-harbour.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/offshore-supply-vessel-lerwick-harbour.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/offshore-supply-vessel-lerwick-harbour.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/offshore-supply-vessel-lerwick-harbour.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/offshore-supply-vessel-lerwick-harbour.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Offshore vessel approaching harbour" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/pilot-vessel-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/pilot-vessel-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/pilot-vessel-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/pilot-vessel-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/pilot-vessel-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/pilot-vessel-lerwick.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Pilot vessel following offshore vessel" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/heavy-lift-vessel-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/heavy-lift-vessel-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/heavy-lift-vessel-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/heavy-lift-vessel-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/heavy-lift-vessel-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/heavy-lift-vessel-lerwick.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Heavy lift vessel and a worker cleaning a large tank" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick-2.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick-2.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick-2.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick-2.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick-2.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/offshore-vessel-lerwick-2.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Offshore vessel behind pilot vessel" />
                
                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Fishing vessel in harbour" />

            </div>

             <article class="project-text">
                        <h2 class="project-text-title">Harbour Industry</h2>
                </article>

            <div class="image-grid">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/wire-press-lhd-wire-store-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/wire-press-lhd-wire-store-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/wire-press-lhd-wire-store-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/wire-press-lhd-wire-store-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/wire-press-lhd-wire-store-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/wire-press-lhd-wire-store-lerwick.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Man using wire press" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/gas-cutting-malakoff-shetland.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/gas-cutting-malakoff-shetland.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/gas-cutting-malakoff-shetland.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/gas-cutting-malakoff-shetland.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/gas-cutting-malakoff-shetland.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/gas-cutting-malakoff-shetland.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Gas cutting" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/grinding-malakoff-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/grinding-malakoff-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/grinding-malakoff-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/grinding-malakoff-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/grinding-malakoff-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/grinding-malakoff-lerwick.jpg 320w"
                    sizes="(min-width: 920px) 50vw, 100vw"
                    alt="Worker grinding boat panels" />


            </div>
            
            <div class="triple-image-collage">

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/welding-malakoff-shetland.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/welding-malakoff-shetland.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/welding-malakoff-shetland.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/welding-malakoff-shetland.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/welding-malakoff-shetland.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/fishing-vessel-lerwick.jpg 320w"
                    sizes="(min-width: 720px) 67vw, 100vw"
                    alt="Close-up of a welder" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/grinding-lhd-wire-store-lerwick.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/grinding-lhd-wire-store-lerwick.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/grinding-lhd-wire-store-lerwick.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/grinding-lhd-wire-store-lerwick.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/grinding-lhd-wire-store-lerwick.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/grinding-lhd-wire-store-lerwick.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Grinding fishing wires" />

                <img class="lazy"
                    src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/welder-lhd-wire-store-shetland.jpg"
                    data-src="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/welder-lhd-wire-store-shetland.jpg"
                    srcset="https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_2048/calumtoogood/projects/lerwickharbour/welder-lhd-wire-store-shetland.jpg 2048w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_1024/calumtoogood/projects/lerwickharbour/welder-lhd-wire-store-shetland.jpg 1024w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_640/calumtoogood/projects/lerwickharbour/welder-lhd-wire-store-shetland.jpg 640w, https://res.cloudinary.com/dhat0b0ey/f_auto,q_70,w_320/calumtoogood/projects/lerwickharbour/welder-lhd-wire-store-shetland.jpg 320w"
                    sizes="(min-width: 720px) 33vw, 100vw"
                    alt="Welding trawler doors" />

            </div>

            

        </section>

        </Main>
    
  </Layout>
)

export default LerwickHarbour